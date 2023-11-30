# -*- coding: utf-8 -*-
# @Author  : houming818
# @Email   : houming818@qq.com
# @License : MIT

from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status

from api.errors import ErrorCode, ErrorMessage

from .base import CoreViewSet

class ConfigViewSet(CoreViewSet):

    @action(methods=['get'], detail=False, url_path='all')
    def all(self, request: Request):
        return Response(
                data={
                    "code": ErrorCode.SUCCESS,
                    "message": ErrorMessage.SUCCESS,
                    "result": True,
                    "pagination": {
                        "total": 3,
                        "page_num": 1,
                        "page_size": 10
                        },
                    "data": [
                        "cat",
                        "dog",
                        "pig"
                        ]
                    },
                status=status.HTTP_200_OK
                )
