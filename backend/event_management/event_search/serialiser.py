from rest_framework.serializers import Serializer ,CharField , IntegerField , ChoiceField
class EventSearchSerialiser(Serializer):
    keyword = CharField()
    distance = IntegerField()
    category = ChoiceField(choices=["default","sports","music"])
    location = CharField()