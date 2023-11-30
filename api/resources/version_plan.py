
import rest_framework.serializers as serializers

from .base import BaseRes

class ApplyVersionPlanRes(BaseRes):
    id = serializers.IntegerField()
    name = serializers.CharField()
    publish_date = serializers.CharField(required=False, )
    pm = serializers.ListField(child=serializers.DictField())
    dev = serializers.ListField(child=serializers.DictField())
    qa = serializers.ListField(child=serializers.DictField())
    business = serializers.ListField(child=serializers.DictField())
