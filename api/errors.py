# Purpose: Define Errors for the project
# Author:  houming818@qq.com
# Date:    2023/11/27

import json

class ErrorCode(object):
    SUCCESS = 100000
    SERVER_ERROR = 100001
    INVALID_PARAMETER = 100002

class ErrorMessage(object):
    SUCCESS = '成功'
    SERVER_ERROR = '服务器内部故障'
    INVALID_PARAMETER = '参数错误'

class ViewError(Exception):

    def __init__(self, message: str, code: int):
        self.code = code
        self.result = False
        self.message = message

    def __str__(self):
        return f"code:{self.code} {self.message}"

    def to_dict(self):
        return {
            'result': self.result,
            'code': self.code,
            'message': self.message
        }

class ServiceError(Exception):

    def __init__(self, message: str, code: int):
        self.code = code
        self.result = False
        self.message = message

    def __str__(self):
        return f"code:{self.code} {self.message}"

    def to_dict(self):
        return {
            'result': self.result,
            'code': self.code,
            'message': self.message
        }
