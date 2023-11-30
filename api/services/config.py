import yaml
import base64

from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad


from abc import ABC, abstractmethod

from .base import Service
from rest.models import Config

from rest.errors import ServiceError

from django.conf import settings
from django.core.cache import caches

import logging
logger = logging.getLogger(__name__)


class ConfigService(Service):

    @abstractmethod
    def get_config(self, config_name, *args, **kwargs):
        pass

    @abstractmethod
    def save(self, payload):
        pass

    @abstractmethod
    def list(self):
        pass

class ConfigMapConfigService(ConfigService):
    pass

class DbConfigService(ConfigService):

    def setup(self, *args, **kwargs):
        pass

    def get_config(self, config_name, *args, **kwargs):
        config_obj = Config.objects.filter(filename=config_name).order_by('-version').first()
        if config_obj is None:
            raise ServiceError(f"配置{config_name}不存在,请联系系统管理员")
        content = config_obj.content
        plain_text = self.decrypt(content)
        try:
            config = yaml.safe_load(plain_text)
        except Exception as e:
            logger.error(e)
            raise ServiceError("配置文件格式错误")
        return config

    def __init__(self):
        self.BLOCK_SIZE = 32

    def list(self):
        configs = Config.objects.all()
        ret = [x.to_dict() for x in configs]
        [x.update({"content": self.decrypt(x["content"])}) for x in ret]
        return ret

    def encrypt(self, raw):
        key = settings.CONFIG_SECRET.encode('utf8')
        cipher = AES.new(key, AES.MODE_ECB)
        result = cipher.encrypt(pad(raw.encode(), self.BLOCK_SIZE))
        encodestrs = base64.b64encode(result)
        plain_text = encodestrs.decode('utf8')
        return plain_text

    def decrypt(self, data):
        key= settings.CONFIG_SECRET.encode('utf8')
        data = base64.b64decode(data)
        cipher = AES.new(key, AES.MODE_ECB)

        # 去补位
        text_decrypted = cipher.decrypt(data)
        text_decrypted = unpad(text_decrypted, self.BLOCK_SIZE).decode('utf8')
        return text_decrypted

    def save(self, payload):
        try:
            payload['content'] = self.encrypt(payload['content'])
            _id = payload.pop('id', None)
            ret, created = Config.objects.update_or_create(filename=payload['filename'], version=payload['version'], defaults=payload)
            ret = ret.to_dict()
            ret.update({
                "content": self.decrypt(ret["content"])
                })
            return ret
        except Exception as e:
            logger.exception(e)
            raise ServiceError(f"更新配置失败. message:{e}")
