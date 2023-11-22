from mongo_db import db,client
from .fetcher import fetcher
from os import environ
from ..serialiser import EventDetailsSerialiser , SuggestionSerialiser
from .getter import getter
class Suggestions:
    def __init__(self):
        self.collection = db["suggestions"]
        self.API_HOST = environ.get("TICKETMASTER_API_URL")
        self.API_KEY = environ.get("TICKETMASTER_API_KEY")

    def _remove_all(self):
        self.collection.delete_many({})
    def _insert(self,documents):
        for document in documents:
            filter_criteria = {'id': document['id']}
            update_data = {'$set': document}
            self.collection.update_one(filter_criteria,update_data,upsert=True)

    def _get_suggestions(self):
        endpoint = "suggest"
        url = f"{self.API_HOST}/{endpoint}/?apikey={self.API_KEY}"
        print(url)
        data = fetcher(url)
        events = getter(data,"_embedded.attractions")
        if events:
            serialser = SuggestionSerialiser(data = events,many=True)
            serialser.is_valid(raise_exception=True)
            return serialser.validated_data
        return None
    
    def store_suggestions(self):
        data = self._get_suggestions()
        if data:
            self._remove_all()
            self.collection.insert_many(data)

    def send_suggestions(self):
        stored_suggestion = self.collection.find({},projection={"_id":False})
        return list(stored_suggestion)


        