
from django.views.generic.base import RedirectView
from django.urls import path,re_path,include
from . import views
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'', views.LocationViewSet)

urlpatterns = [
 path("",views.indexView,name="home"),
 path('api/', include(router.urls)),
]