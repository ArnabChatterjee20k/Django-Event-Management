from mongo_db import db,client
from .fetcher import async_fetcher
from os import environ
from .insert_with_check import insert_with_check
from .getter import getter
import asyncio
import httpx

class EventsCache:
    def __init__(self):
        self.collection = db["events_details"]
        self.API_HOST = environ.get("TICKETMASTER_API_URL")
        self.API_KEY = environ.get("TICKETMASTER_API_KEY")
    def _insert(self,documents):
        insert_with_check(self.collection,documents)

    async def get_events(self):
        endpoint = "events"
        base = f"{self.API_HOST}/{endpoint}?apikey={self.API_KEY}&size=50"
        pages = int(environ.get("PAGES"))
        async with httpx.AsyncClient() as client:
            data = []
            for page in range(pages):
                url = f"{base}&page={page}"
                data.append(asyncio.ensure_future(async_fetcher(client,url)))

            events = await asyncio.gather(*data)
            if not events:
                return
            for event in events:
                try:
                    data = getter(event,"_embedded.events")
                    self._insert(data)
                except Exception as e:
                    print("error while insertion")