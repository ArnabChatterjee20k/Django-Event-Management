from event_search.utils.EventsCache import EventsCache
import asyncio
def store_events():
    asyncio.run(EventsCache().get_events())