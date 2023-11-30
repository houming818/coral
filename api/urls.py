from django.urls import path, include
from rest_framework import routers

from api.views import ConfigViewSet

router = routers.DefaultRouter()

router.register(r'config', ConfigViewSet, basename='config')

urlpatterns = [
    path('', include(router.urls)),
]
