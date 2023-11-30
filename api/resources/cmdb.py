import json

from common.log import logger

from rest_framework import serializers

from .base import BaseRes

class ObjectTypesRes(BaseRes):
    types = serializers.ListField(child=serializers.CharField())
