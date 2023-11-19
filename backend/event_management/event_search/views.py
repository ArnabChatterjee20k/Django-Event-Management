from rest_framework.response import Response
from rest_framework.decorators import api_view
from .utils.Events import Events
from .serialiser import EventSearchSerialiser

@api_view(["POST"])
def getData(request):
    event = Events()
    data = EventSearchSerialiser(data = request.data)
    if not data.is_valid(raise_exception=True):
        return Response(status=400)
    valid_event_data = data.validated_data
    params = {
        "keyword":valid_event_data.get("keyword"),
        "category":valid_event_data.get("category"),
        "distance":valid_event_data.get("distance"),
        "location":valid_event_data.get("location"),
    }
    return Response(event.get_all_events(**params))