import requests
import os
from geolib import geohash
from .fetcher import fetcher
class Maps:
    def __init__(self):
        self.API_KEY = os.environ.get("X-RapidAPI-Key")
        self.API_HOST = os.environ.get("X-RapidAPI-Host")
        self.API_URL = os.environ.get("GEOCODE_URL")
        self.PRECISION = 7
    
    def get_geocode(self,address):
        location = self._get_coordinates(address)
        long = location.get("lng")
        lat = location.get("lat")

        return geohash.encode(lat=lat,lon=long,precision=self.PRECISION)

    def _get_coordinates(self,address):
        headers = {
            "X-RapidAPI-Key": self.API_KEY,
            "X-RapidAPI-Host": self.API_HOST
        }
        querystring = {"address":address,"language":"en"}
        data = fetcher(self.API_URL,error_message="Error fetching the geocode", headers=headers, params=querystring)
        data = data.get("results")
        if not data:
            raise Exception("No such address found")
        location = data[0].get("location")
        return location

