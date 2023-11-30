# -*- coding: utf-8 -*-
# @Time    : 2023/11/27 17:00
# @Author  : houming818
# @Email   : houming818@qqcom

from typing import Dict
from typing import Tuple
from typing import Type
from typing import Any
from typing import MutableMapping
from collections.abc import Mapping

from .interface import DataProtocolInterface
from .interface import DataObjectInterface

class BaseDataObject(DataObjectInterface):
    """
    数据平面接口
    """
    __data: MutableMapping

    def __init__(self, data: Any):
        self.__data = data

    def __iter__(self):
        return iter(self.__data)

    def __len__(self):
        return len(self.__data)

    def __setitem__(self, key, value):
        return self.__data.__setitem__(key, value)

    def __getitem__(self, key):
        return self.__data.__getitem__(key)

    def __delitem__(self, key):
        return self.__data.__delitem__(key)

class BaseDataProtocol(DataProtocolInterface):
    """
    数据平面的shape接口
    """
    name: str
    version: str

    def __init__(self, name: str, version: str = "0.1", data: Any = None):
        self.name = name
        self.version = version

    def to_dict(self, data_object: Type['DataObjectInterface']) -> Tuple[Dict, str]:
        """
        获取shape
        """
        ret: Dict = {}
        for k, v in data_object.items():
            ret[k] = v
        return ret, ""

