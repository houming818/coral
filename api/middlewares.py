# coding:utf-8
import cProfile
import pstats
from io import StringIO

from django.conf import settings
from django.core.exceptions import MiddlewareNotUsed
from django.http.response import HttpResponse

class ProfileMiddleware(object):

    def __init__(self, get_response):
        if not settings.DEBUG:
            raise MiddlewareNotUsed  # 只在DEBUG模式下启用该中间件

        self.get_response = get_response

    def __call__(self, request):
        if 'dbg007' in request.GET:  # 当请求URL中存在profile参数时进行性能分析
            profile = cProfile.Profile()
            profile.enable()
            self.get_response(request)
            profile.disable()
            ram_file = StringIO()
            sort_by = 'tottime'
            stats = pstats.Stats(profile, stream=ram_file)
            stats.sort_stats(sort_by).print_stats()
            response = HttpResponse(ram_file.getvalue().encode('utf-8'), 'text/plain')
        else:
            response = self.get_response(request)

        return response
