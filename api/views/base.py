# -*- coding: utf-8 -*-
# @Author  : houming818
# @Email   : houming818@qq.com
# @License : MIT

from typing import List
from collections import OrderedDict

from rest_framework import viewsets
from rest_framework.exceptions import ValidationError
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

from api.errors import ErrorCode, ErrorMessage, ServiceError, ViewError
from common.log import logger

class CorePagination(PageNumberPagination):

    page_size_query_param = "page_size"

    def get_paginated_response(self, data):
        total = data['pagination']['total']
        page_num = data['pagination']['page_num']
        page_size = data['pagination']['page_size']
        return Response(OrderedDict({
            'code': ErrorCode.SUCCESS,
            'message': ErrorMessage.SUCCESS,
            'result': True,
            'pages': {
                'total': total,
                'page_num': page_num,
                'page_size': page_size,
                },
            'data': data['data']
            }))


class CoreViewSet(viewsets.GenericViewSet):
    pagination_class = CorePagination

    def handle_exception(self, exc: Exception) -> Response:
        if isinstance(exc, ValidationError):
            return Response(
                    {
                        "code": ErrorCode.INVALID_PARAMETER,
                        "message": ErrorMessage.INVALID_PARAMETER,
                        "result": False,
                        "data": exc.detail
                        }
                    )
        elif isinstance(exc, (ServiceError, ViewError)):
            return Response(
                    {
                        "code": exc.code,
                        "message": exc.message,
                        "result": False
                        }
                    )
        else:
            return super().handle_exception(exc)

    def get_page_data(self, request, total_data: List) -> dict:
        page_num = int(request.GET.get('page_num', 1))
        page_size = int(request.GET.get('page_size', 10))

        page_data = total_data[(page_num - 1) * page_size: page_num * page_size]

        response_data = {
            'pagination': {
                'page_num': page_num,
                'page_size': page_size,
                'total': len(total_data)
                },
            'data': page_data
            }

        return response_data

