# -*- coding: utf-8 -*-
# @Author  : houming818
# @Email   : houming818@qq.com
# @License : MIT

import os

from .interfaces import ServiceInterface

class AccountService(ServiceInterface):

    def __init__(self):
        pass

    def create_account(self, username: str, password: str):
        pass

    def get_account(self, username: str):
        pass

    def update_account(self, username: str, password: str):
        pass

    def delete_account(self, username: str):
        pass
