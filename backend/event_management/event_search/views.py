from rest_framework.response import Response
from rest_framework.validators import ValidationError
from rest_framework.decorators import api_view
from .utils.Events import Events
from .utils.Suggestions import Suggestions
from .serialiser import EventSearchSerialiser , EventSearchWithLocationSerialiser 

@api_view(["POST"])
def getData(request):
    event = Events()
    data = {}
    if request.GET:
        if "auto" not in request.GET:
            raise ValidationError({"status":"auto parameter not present in query"},code=400)
        
        auto = request.GET.get("auto")
        if auto == "false":
            data = EventSearchSerialiser(data = request.data)
        elif auto == "true":
            data = EventSearchWithLocationSerialiser(data = request.data)
        else:
            raise ValidationError({"status":"auto parameter is not true or false","auto":auto},code=400)
    else:
        data = EventSearchSerialiser(data = request.data)
    if not data.is_valid(raise_exception=True):
        return Response(status=400)
    # grab the longitude and latitude if auto is true and then turn it into a geohash
    valid_event_data = data.validated_data
    params = {
        "keyword":valid_event_data.get("keyword"),
        "category":valid_event_data.get("category"),
        "distance":valid_event_data.get("distance"),
        "location":valid_event_data.get("location"),
    }
    
    return Response(event.get_all_events(**params))

@api_view(["GET"])
def getDetailsOfEventById(request,id):
    event = Events()
    data = event.get_event_details_by_id(id)
    return Response(data)

@api_view(["GET"])
def getSuggestion(request):
    data = Suggestions().send_suggestions()
    return Response({"suggestions":data})