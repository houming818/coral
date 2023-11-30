
import json
import datetime

from typing import Dict
from typing import Tuple
from typing import Any
from typing import Type

from common.log import logger
from rest.services import BaseFactory

from .interface import DataObjectInterface
from .interface import DataProtocolInterface

from .base import BaseDataObject
from .base import BaseDataProtocol


class VersionFeishu(BaseDataObject):
    """
    版本信息
    """

    def __init__(self, data: Any):
        super().__init__(data=data)

class VersionFeishuProtocol(BaseDataProtocol):
    """
    版本信息
    """
    name: str
    version: str

    def __init__(self, name: str, version: str = "0.1"):
        super().__init__(name, version)
        self.name = name
        self.version = version
        self.attrs = {
                "id": "int",
                "name": "str",
                "simple_name": "str",
                "work_item_type_key": "str",
                "created_by": "feishu_user",
                "created_at": "date",
                "updated_by": "feishu_user",
                }

    def v0_1(self, data_object: DataObjectInterface) -> Tuple[Dict, str]:
        ret = {}
        # 先处理掉所有的fields
        for k, v in data_object.items():
            ret[k] = v

        if "fields" in ret:
            for i in data_object["fields"]:
                if  i["field_type_key"] in ("role_owners", ):
                    ret[i["field_key"]] = i["field_value"]
                    self.attrs[i["field_key"]] = i["field_type_key"]
                    continue
                if i["field_alias"] == "":
                    continue
                ret[i["field_alias"]] = i["field_value"]
                self.attrs[i["field_key"]] = i["field_type_key"]
            del ret["fields"]

        cmdb_service = BaseFactory.get_cmdb_service()
        feishu_service = BaseFactory.get_feishu_service()

        roles = feishu_service.flow_roles("version")

        for r in roles:
            for o in ret["role_owners"]:
                if o["role"] == r["id"]:
                    ret[r["name"]] = o["owners"]
                    self.attrs[r["name"]] = "feishu_users"

        del ret["role_owners"]

        for k, v in ret.items():
            if v is None:
                continue
            field_type = self.attrs.get(k, '')
            if not field_type:
                continue
            elif field_type in ("bool", "boolean"):
                if not isinstance(v, bool):
                    ret[k] = bool(v)
                else:
                    ret[k] = v
            elif field_type == "int":
                if not isinstance(v, int):
                    ret[k] = int(v)
                else:
                    ret[k] = v
            elif field_type in ("singlechar", "longchar", "varchar", "text", "str"):
                ret[k] = str(v)
            elif field_type in ("list", "dict"):
                if not isinstance(v, list) or not isinstance(v, dict):
                    ret[k] = json.dumps(v, ensure_ascii=False)
                else:
                    ret[k] = v
            elif field_type == "date":
                if self.version == "0.1":
                    tmp_v = str(v)
                    if len(tmp_v) == 10:
                        tmp_v2 = datetime.datetime.fromtimestamp(v)
                    else:
                        tmp_v2 = datetime.datetime.fromtimestamp(v/1000)
                    if tmp_v2.year == 1970 and tmp_v2.month == 1 and tmp_v2.day == 1:
                        ret[k] = ""
                    else:
                        ret[k] = tmp_v2.strftime("%Y-%m-%d")
            elif field_type == "time":
                if self.version == "0.1":
                    tmp_v = str(v)
                    if len(tmp_v) == 10:
                        tmp_v2 = datetime.datetime.fromtimestamp(v)
                    else:
                        tmp_v2 = datetime.datetime.fromtimestamp(v/1000)
                    if tmp_v2.year == 1970 and tmp_v2.month == 1 and tmp_v2.day == 1:
                        ret[k] = ""
                    else:
                        ret[k] = tmp_v2.strftime("%Y-%m-%d %H:%M:%S")
            elif field_type in ("feishu_user", "user"):
                tmp = cmdb_service.get_object('feishu_user', user_key=[v,])['data']
                ret[k] = tmp
            elif field_type == "feishu_users":
                tmp = cmdb_service.get_object('feishu_user', user_key=v)['data']
                ret[k] = tmp
        #ret["attrs"] = self.attrs
        return ret, ""


    def to_dict(self, data_object: DataObjectInterface) -> Tuple[Dict, str]:
        """
        获取shape
        """
        if self.version == "0.1":
            return self.v0_1(data_object)
        else:
            return {}, "version not supported"

'''
        cmdb_service = BaseFactory.get_cmdb_service()
        cmdb_service: CmdbService = cmdb_service # type: ignore
        attrs = cmdb_service.get_attrs("version")

        owners_group = {}
        owners_ids = []

        for v in resp_json:
            logger.info(f"hihm818.v {json.dumps(v, indent=2, ensure_ascii=False)}")
            v2 = self.dumps_object(v, attrs)
            for k, i in v2.items():
                logger.info(f"hihm818.3 k:{k} i:{i}")
                if 'role_owners' == k:
                    for j in i:
                        if j['role'] == FeishuConsts.ROLE_ID_PM and j['owners']:
                            owners_group["PM"] = j['owners']
                            owners_ids.extend(j['owners'])
                        else:
                            continue
            owners = {}
            tmp = cmdb_service.get_object('feishu_user', user_key=owners_ids)['data']
            for i in tmp:
                user_id = i['email'].split('@')[0] if '@' in i['email'] else '?'
                i['name'] = i['name_cn'] + '(' + user_id + ')'
                for k, v in owners_group.items():
                    if i['user_key'] in v:
                        if k in owners:
                            owners[k].append(i)
                        else:
                            owners[k] = [i]
'''

