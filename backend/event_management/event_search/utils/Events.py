import os
import requests
from .Maps import Maps
from ..serialiser import EventSearchOutputSerialiser
from .fetcher import fetcher
class Events:
    def __init__(self):
        self.API_KEY = os.environ.get("TICKETMASTER_API_KEY")
        self.API_URL = os.environ.get("TICKETMASTER_API_URL")
        self.map_client = Maps()
    
    def get_all_events(self,keyword,category,distance,location):
        eventSearchParams = {
            "keyword":keyword,
            "classificationName":category,
            "radius":distance,
            "unit":"miles",
            "geoPoint":self.map_client.get_geocode(location)
        }
        events_source = self._get_all_events(eventSearchParams).get("_embedded")
        if not events_source:
            return []
    
        all_events = events_source.get("events")
        
        all_events_data_with_required_fields = EventSearchOutputSerialiser(data=all_events,many=True)
        all_events_data_with_required_fields.is_valid(raise_exception=True)
        
        return all_events_data_with_required_fields.validated_data
        

    def _get_all_events(self,eventSearchParams):
        endpoint = "events"
        url = self._build_FULL_URL(endpoint,**eventSearchParams)
        response = fetcher(url,error_message="Error while fetching the events")
        return response

    def _build_FULL_URL(self,endpoint,**kwargs):
        """The structure of TicketMaster HOST/ENDPOINT?apikey={}"""
        base = f"{self.API_URL}/{endpoint}?apikey={self.API_KEY}&size=20"
        for key in kwargs:
            base+=f"&{key}={kwargs[key]}"
        print(base)
        return base