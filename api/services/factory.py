from abc import ABC, abstractmethod
import importlib

from rest.errors import ServiceError

import logging
logger = logging.getLogger(__name__)

import django.apps as apps

from .base import Service

pool = {}

class BaseFactory(object):

    '''
    @classmethod
    def get_service(cls, class_path, *args, **kwargs) -> Service:
        module_name = '.'.join(class_path.split(".")[:-1])
        class_name = class_path.split(".")[-1]
        try:
            module = importlib.import_module(f'{module_name}')
            service = getattr(module, class_name)
            if not issubclass(service, Service):
                raise ServiceError(f'{class_name} is not a subclass of Service')
            svc_obj = service(*args, **kwargs)
            return svc_obj
        except TypeError as e:
            logger.exception(e)
            raise ServiceError(f'Error instantiating {class_name}')
        except ImportError as e:
            logger.exception(e)
            raise ServiceError(f'No module named {module_name}')
    '''

    @classmethod
    def get_cmdb_service(cls, *args, **kwargs) -> Service:
        if 'cmdb' not in pool:
            from .cmdb import CmdbService
            pool['cmdb'] = CmdbService(*args, **kwargs)
        return pool['cmdb']

    @classmethod
    def get_feishu_service(cls, *args, **kwargs) -> Service:
        if 'feishu' not in pool:
            from .feishu import FeishuService
            pool['feishu'] = FeishuService(*args, **kwargs)
        return pool['feishu']

    @classmethod
    def get_dms_service(cls, *args, **kwargs) -> Service:
        if 'dms' not in pool:
            from .dms import DmsService
            pool['dms'] = DmsService(*args, **kwargs)
        return pool['dms']

    @classmethod
    def get_account_service(cls, *args, **kwargs) -> Service:
        if 'account' not in pool:
            from .account import AccountService
            pool['account'] = AccountService(*args, **kwargs)
        return pool['account']

    @classmethod
    def get_nacos_service(cls, *args, **kwargs) -> Service:
        if 'nacos' not in pool:
            from .nacos import NacosService
            pool['nacos'] = NacosService(*args, **kwargs)
        return pool['nacos']

    @classmethod
    def get_gateway_service(cls, *args, **kwargs) -> Service:
        if 'gateway' not in pool:
            from .gateway import GatewayService
            pool['gateway'] = GatewayService(*args, **kwargs)
        return pool['gateway']

    @classmethod
    def get_xxljob_service(cls, *args, **kwargs) -> Service:
        if 'xxljob' not in pool:
            from .xxljob import XxljobService
            pool['xxljob'] = XxljobService(*args, **kwargs)
        return pool['xxljob']

    @classmethod
    def get_image_service(cls, *args, **kwargs) -> Service:
        if 'image' not in pool:
            from .image import ImageService
            pool['image'] = ImageService(*args, **kwargs)
        return pool['image']

    @classmethod
    def get_infra_service(cls, *args, **kwargs) -> Service:
        if 'infra' not in pool:
            from .infra import InfraService
            pool['infra'] = InfraService(*args, **kwargs)
        return pool['infra']
