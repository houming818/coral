# -*- coding: utf-8 -*-
# @Author: houming818
# @Email: houming818@qq.com
# @LICENSE: MIT

import os

from common.log import logger
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.generic import View

class IndexView(View):
    def get(self, request):
        return render(request, 'index.html')
