
from typing import Tuple
from typing import Dict
from typing import Type
from typing import MutableMapping
from typing import Any

class DataProtocolInterface(object):
    """
    数据平面的shape接口
    """

    def __init__(self, name: str, version: str):
        raise NotImplementedError

    def to_dict(self, data_object: Type['DataObjectInterface']) -> Tuple[Dict, str]:
        """
        获取shape
        """
        raise NotImplementedError

class DataObjectInterface(MutableMapping):
    """
    数据平面接口
    """

    def __init__(self, data: Any):
        raise NotImplementedError

    def __len__(self):
        raise NotImplementedError

    def __iter__(self):
        raise NotImplementedError

    def __getitem__(self, key):
        raise NotImplementedError

    def __delitem__(self, key):
        raise NotImplementedError
