# -*- coding: utf-8 -*-
"""
Tencent is pleased to support the open source community by making 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community
Edition) available.
Copyright (C) 2017-2021 THL A29 Limited, a Tencent company. All rights reserved.
Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://opensource.org/licenses/MIT
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
"""

import re

from django.conf import settings
from django.conf.urls import include, url
from django.contrib import admin
from django.urls import re_path
from django.views.static import serve


from views import IndexView

urlpatterns = [
        url(r"^$", IndexView.as_view(), name="index"),
        re_path(r'^%s(?P<path>.*)$' % re.escape(settings.STATIC_URL), serve, {'document_root': settings.STATIC_ROOT}),
        url(r"^admin/", admin.site.urls),
        url(r"^api/", include("api.urls")),
        ]
