from rest_framework.serializers import Serializer ,CharField , IntegerField,FloatField , ChoiceField ,DictField,ListField
from .utils.getter import getter
from .utils.joinStringBySep import joinStringBySep

class BaseEventSearchSerialiser(Serializer):
    keyword = CharField()
    distance = IntegerField()
    category = ChoiceField(choices=["default","sports","music","arts&theatre","film","miscellaneous"])
    def to_internal_value(self, data):
        if "category" in data:
            data["category"] = data["category"].lower()
        return super().to_internal_value(data)
class EventSearchSerialiser(BaseEventSearchSerialiser):
    location = CharField()
class EventSearchWithLocationSerialiser(BaseEventSearchSerialiser):
    location = DictField(child = FloatField())
    def to_internal_value(self, data):
        print(data)
        return super().to_internal_value(data)
class EventSearchOutputSerialiser(Serializer):
    id = CharField()
    event = CharField()
    date_time = CharField()
    genre = CharField()
    venue = CharField()
    icon = CharField()
    
    def to_internal_value(self, data):
        obj = dict()
        obj["id"] = data.get("id")
        obj["event"] = data.get("name")
        obj["date_time"] = data.get("dates").get("start").get("dateTime")
        obj["genre"] = data.get("classifications")[0].get("genre").get("name")
        obj["venue"] = data.get("_embedded").get("venues")[0].get("name")
        obj["icon"] = data.get("images")[0].get("url")
        return super().to_internal_value(obj)

class EventDetailsSerialiser(Serializer):
    date_time = DictField(default={})
    name = CharField()
    artists_team = ListField(default=[])
    venue = DictField(default={})
    genre = CharField(allow_blank=True,default="")
    price_ranges = DictField(default={})
    ticket_link = CharField(allow_blank=True,default="")
    seat_map = CharField(allow_blank=True,default="")
    ticket_status = CharField(allow_blank=True,default="")
    open_hours = CharField(allow_blank=True,default="")
    phone_number = CharField(allow_blank=True,default="")
    general_rule = CharField(allow_blank=True,default="")
    child_rule = CharField(allow_blank=True,default="")


    def to_internal_value(self, data):
        obj = dict()
        obj["name"] = data.get("name")
        obj["ticket_link"] = getter(data, "url")

        dates = getter(data, "dates.start")
        obj["date_time"] = {
            "localDate": getter(dates, "localDate"),
            "localTime": getter(dates, "localTime"),
        }

        artists_team = getter(data,"_embedded.attractions",default=[])
        team = []
        for artist in artists_team:
            team.append({"name":getter(artist,"name"),"url":getter(artist,"url")})
        obj["artists_team"] = team

        venue = getter(data, "_embedded.venues.0")
        obj["venue"] = {
            "name": getter(venue, "name"),
            "city": getter(venue, "city.name"),
            "state": getter(venue, "state.name"),
            "address": getter(venue, "address.line1"),
            "location": {"lat": getter(venue, "location.latitude"), "long": getter(venue, "location.longitude")}
        }
        segment = getter(data, "classifications.0.segment.name")    
        genre = getter(data, "classifications.0.genre.name")    
        subGenre = getter(data, "classifications.0.subGenre.name")
        type = getter(data, "classifications.0.type.name")
        subType = getter(data, "classifications.0.subType.name")

        obj["genre"] = joinStringBySep(strs=(segment,genre,subGenre,type,subType))

        obj["price_ranges"] = {"max": getter(data, "priceRanges.0.max"), "min": getter(data, "priceRanges.0.min")}

        obj["seat_map"] = getter(data, "seatmap.staticUrl")

        obj["ticket_status"] = getter(data, "dates.status.code")

        obj["open_hours"] = getter(data,"_embedded.venues.0.boxOfficeInfo.openHoursDetail")
        
        obj["phone_number"] = getter(data,"_embedded.venues.0.boxOfficeInfo.phoneNumberDetail")
        
        obj["general_rule"] = getter(data,"_embedded.venues.0.generalInfo.generalRule")
        obj["child_rule"] = getter(data,"_embedded.venues.0.generalInfo.childRule")
        return super().to_internal_value(obj)