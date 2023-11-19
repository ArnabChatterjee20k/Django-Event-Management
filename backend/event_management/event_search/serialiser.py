from rest_framework.serializers import Serializer,BaseSerializer ,CharField , IntegerField , ChoiceField ,DateTimeField
from pprint import pprint
class EventSearchSerialiser(Serializer):
    keyword = CharField()
    distance = IntegerField()
    category = ChoiceField(choices=["default","sports","music"])
    location = CharField()

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
        