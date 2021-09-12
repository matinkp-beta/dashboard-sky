from django.shortcuts import render
from rest_framework import viewsets
from .models import Location
from .serializer import LoacationSerializer

# Create your views here.
def indexView(request, *args, **kwargs):
    return render(request, "home/index.html")


class LocationViewSet(viewsets.ModelViewSet):
    """
    A viewset that provides the standard actions
    """
    queryset = Location.objects.all()
    serializer_class = LoacationSerializer