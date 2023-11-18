import os
import requests
from .Maps import Maps
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
        print(self.map_client.get_geocode(location))
        endpoint = "events"
        url = self._build_FULL_URL(endpoint,**eventSearchParams)
        print(url)
        response = requests.get(url)
        if response.status_code != 200:
            raise Exception("Error while fetching the events")
        return response.json()

    def _build_FULL_URL(self,endpoint,**kwargs):
        """The structure of TicketMaster HOST/ENDPOINT?apikey={}"""
        base = f"{self.API_URL}/{endpoint}?apikey={self.API_KEY}&size=10"
        for key in kwargs:
            base+=f"&{key}={kwargs[key]}"
        print(base)
        return base