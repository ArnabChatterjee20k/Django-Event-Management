from rest_framework.serializers import Serializer,BaseSerializer ,CharField , IntegerField , ChoiceField ,DictField
from pprint import pprint
class EventSearchSerialiser(Serializer):
    keyword = CharField()
    distance = IntegerField()
    category = ChoiceField(choices=["default","sports","music"])
    location = CharField()

    def to_internal_value(self, data):
        if "category" in data:
            data["category"] = data["category"].lower()
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
    name : CharField()
    date_time = DictField()
    artists_team = CharField(default="")
    venue = CharField(default="")
    genre = CharField(default="")
    price_ranges = DictField(default={})
    ticket_link = CharField(default="")
    seat_map = CharField(default="")
    ticket_status = CharField(default="")

    def to_internal_value(self, data):
        obj = dict()
        obj["name"] = data.get("name")

        dates = data.get("dates").get("start")
        obj["date_time"] = {
            "localDate":dates.get("localDate"),
            "localTime":dates.get("localTime"),

        }

        obj["venue"] = data.get("_embedded").get("venues")[0].get("name")
        obj["genre"] = data.get("classifications")[0].get("genre").get("name")
        
        price_ranges = data.get("priceRanges")[0]
        obj["price_ranges"] = {"max":price_ranges.get("max"),"min":price_ranges.get("min")}
        
        obj["seat_map"] = data.get("seatmap").get("staticUrl")

        obj["ticket_status"] = data.get("dates").get("status").get("code")
        return super().to_internal_value(obj)