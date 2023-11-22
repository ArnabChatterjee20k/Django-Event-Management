from django.urls import path
from . import views

urlpatterns = [
    path("", views.getData,name="all events"),
    path("<str:id>/",views.getDetailsOfEventById,name="event details"),
    path("help/suggestions/",views.getSuggestion,name="suggestions"),
]
