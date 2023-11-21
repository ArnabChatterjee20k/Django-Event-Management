import requests
import os
from geolib import geohash
from .fetcher import fetcher
from rest_framework.validators import ValidationError
class Maps:
    def __init__(self):
        self.API_KEY = os.environ.get("X-RapidAPI-Key")
        self.API_HOST = os.environ.get("X-RapidAPI-Host")
        self.API_URL = os.environ.get("GEOCODE_URL")
        self.PRECISION = 7
    
    def get_geocode(self,address:dict|str):
        """
            get_geocode is applied using method overloading
            if dictionary of lat and long is passed then it calculate the geohash
            else if the address string is given then first long then lat
        """
        if isinstance(address,dict):
            if "lat" not in address or "long" not in address:
                raise Exception("lat and long must be in the address")
            lat = address.get("lat")
            long = address.get("long")
            return geohash.encode(lat=lat,lon=long,precision=self.PRECISION)
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
            raise ValidationError({"status":"No such address found"},code=403)
        location = data[0].get("location")
        return location

