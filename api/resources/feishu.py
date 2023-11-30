
import json, datetime

from common.log import logger

from rest_framework import serializers

from .base import BaseRes

class FieldsField(serializers.Field):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        # 在这里可以进行自定义的初始化操作
        # 例如，可以设置默认值，或者做一些其他处理

    def to_representation(self, value):
        # 在这里将 Python 对象的值转换为原始表示形式（JSON 值）
        if isinstance(value, str):
            try:
                value = json.loads(value)
            except json.decoder.JSONDecodeError:
                logger.exception("json decode error")

        res = []
        for i in value:
            item = {}
            k = i['field_key']
            v = i['field_value']
            alias = i['field_alias']
            if 'date' in alias or 'time' in alias:
                if v is None:
                    v = 0
                v = datetime.datetime.fromtimestamp(v/1000).strftime('%Y-%m-%d %H:%M:%S')
            if alias:
                item[alias] = v
            else:
                item[k] = v
            res.append(item)
        return res

    def to_internal_value(self, data):
        # 在这里将原始表示形式（JSON 值）转换为 Python 对象的值

        # 自定义初始化 field1 字段的值
        if isinstance(data, str):
            try:
                data = json.loads(data)
            except json.decoder.JSONDecodeError:
                logger.exception("json decode error")
            return data
        if isinstance(data, (list, dict)):
            return json.dumps(data)
        return data

class DateTimeField(serializers.Field):

    def to_representation(self, value):
        return datetime.datetime.fromtimestamp(value/1000).strftime('%Y-%m-%d %H:%M:%S')

class TypeRes(BaseRes):
    api_name = serializers.CharField()
    name = serializers.CharField()
    is_disable = serializers.IntegerField()
    type_key = serializers.CharField()

class TypesRes(BaseRes):
    data = TypeRes(many=True)

class VersionRes(BaseRes):
    id = serializers.IntegerField()
    name = serializers.CharField()
    created_at = DateTimeField()
    created_by = serializers.CharField()
    fields = FieldsField()

    def get_created_at_to_representation(self, value):
        return datetime.datetime.fromtimestamp(value/1000).strftime('%Y-%m-%d %H:%M:%S')

class VersionsRes(BaseRes):
    data = VersionRes(many=True)


class BizRes(BaseRes):
    id = serializers.IntegerField()
    name = serializers.CharField()
    fields = FieldsField()


class BizsRes(BaseRes):
    data = BizRes(many=True)


class ChannelRes(BaseRes):
    tenant_group_id = serializers.IntegerField()
    tenant_name = serializers.CharField()


class UserRes(BaseRes):
    user_id = serializers.IntegerField()
    user_key = serializers.CharField()
    username = serializers.CharField()
    name_en = serializers.CharField()
    name_cn = serializers.CharField()
    email = serializers.CharField()
    status = serializers.CharField()
    channels = serializers.ListField(child=ChannelRes())


class UsersRes(BaseRes):
    data = UserRes(many=True)


class MySqlRes(BaseRes):
    id = serializers.IntegerField()
    name = serializers.CharField()

class MySqlsRes(BaseRes):
    data = MySqlRes(many=True)
