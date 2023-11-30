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

# -----------------------------------------------------------------------------
# 配置说明：
# 1. 所有配置可在这里修改，也可在环境变量中修改，环境变量优先级更高
# -----------------------------------------------------------------------------

import os
import sys

from blueapps.conf.default_settings import *  # noqa
#from blueapps.conf.log import get_logging_config_dict

# -----------------------------------------------------------------------------
# 加载环境变量
for _env in os.environ:
    if _env.startswith("BK"):
        locals()[_env] = os.environ.get(_env)

# -----------------------------------------------------------------------------
# 站点URL配置
DEV_MODE = os.getenv("DEV_MODE", False) == True
DEBUG = False
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

if DEV_MODE:
    # 开发模式下，默认开启debug
    DEBUG = True

ALLOWED_HOSTS = os.getenv("ALLOWED_HOSTS", "*").split(",")
# -----------------------------------------------------------------------------

# 这里是默认的 INSTALLED_APPS，大部分情况下，不需要改动
# 如果你已经了解每个默认 APP 的作用，确实需要去掉某些 APP，请去掉下面的注释，然后修改
# 请在这里加入你的自定义 APP
INSTALLED_APPS = (
        "bkoauth",
        # 框架自定义命令
        "blueapps.contrib.bk_commands",
        "django.contrib.admin",
        "django.contrib.auth",
        "django.contrib.contenttypes",
        "django.contrib.sessions",
        "django.contrib.sites",
        "django.contrib.messages",
        "django.contrib.staticfiles",
        # account app
        "blueapps.account",
        # 自定义的app
        "corsheaders",
        "rest_framework",
        "api"
        )

# 这里是默认的中间件，大部分情况下，不需要改动
# 如果你已经了解每个默认 MIDDLEWARE 的作用，确实需要去掉某些 MIDDLEWARE，或者改动先后顺序，请去掉下面的注释，然后修改
# 中间件
MIDDLEWARE = [
        # request instance provider
        "blueapps.middleware.request_provider.RequestProvider",
        "django.contrib.sessions.middleware.SessionMiddleware",
        "django.middleware.common.CommonMiddleware",
        #"django.middleware.csrf.CsrfViewMiddleware", # CSRF默认关闭
        "django.contrib.auth.middleware.AuthenticationMiddleware",
        "django.contrib.messages.middleware.MessageMiddleware",
        # 跨域检测中间件， 默认关闭
        # 'django.middleware.clickjacking.XFrameOptionsMiddleware',
        "django.middleware.security.SecurityMiddleware",
        # 蓝鲸静态资源服务
        "whitenoise.middleware.WhiteNoiseMiddleware",
        # Auth middleware
        "blueapps.account.middlewares.RioLoginRequiredMiddleware",
        "blueapps.account.middlewares.WeixinLoginRequiredMiddleware",
        "blueapps.account.middlewares.LoginRequiredMiddleware",
        # exception middleware
        "blueapps.core.exceptions.middleware.AppExceptionMiddleware",
        # django国际化中间件
        "django.middleware.locale.LocaleMiddleware",
        # 跨域检测中间件， 默认关闭
        "corsheaders.middleware.CorsMiddleware",
        ]


# 跨域设置
CORS_ORIGIN_ALLOW_ALL = True

CORS_ALLOW_CREDENTIALS = True

# *****
CORS_ORIGIN_WHITELIST = ()
# *****

CORS_ALLOW_HEADERS = [
    "content-type",
    "x-token",
    "x-bkapi-authorization",
]

# 默认数据库AUTO字段类型
DEFAULT_AUTO_FIELD = "django.db.models.AutoField"


# -----------------------------------------------------------------------------
# CELERY 开关，使用时请改为 True，修改项目目录下的 Procfile 文件，添加以下两行命令：
# worker: python manage.py celery worker -l info
# beat: python manage.py celery beat -l info
# 不使用时，请修改为 False，并删除项目目录下的 Procfile 文件中 celery 配置
IS_USE_CELERY = True
# CELERY 配置，申明任务的文件路径，即包含有 @task 装饰器的函数文件
CELERY_IMPORTS = (
        "api.tasks",
        )
# -----------------------------------------------------------------------------

# CELERY 并发数，默认为 2，可以通过环境变量或者 Procfile 设置
CELERYD_CONCURRENCY = 8
CELERYD_TASK_TIME_LIMIT = 60 * 60 * 24
CELERYD_TASK_SOFT_TIME_LIMIT = 60 * 60 * 24

# -----------------------------------------------------------------------------
# 所有环境的日志级别可以在这里配置
LOG_LEVEL = 'INFO'
# load logging settings
LOGGING = {
        'version': 1,
        'disable_existing_loggers': False,
        'formatters': {
            'dev_format': {
                'format':
                '%(levelname)s %(asctime)s %(module)s.%(funcName)s@%(lineno)d %(message)s'
                }
            },
        'handlers': {
            'stdout': {
                'level': LOG_LEVEL,
                'formatter': 'dev_format',
                'class':'logging.StreamHandler',
                'stream': sys.stdout
                }
            },
        'loggers': {
            "root": {
                'level': LOG_LEVEL,
                'handlers': ['stdout'],
                'propagate': True
                }
            }
        }
# -----------------------------------------------------------------------------

# -----------------------------------------------------------------------------
# 缓存配置
# 请参考 https://docs.djangoproject.com/zh-hans/3.2/ref/settings/#caches
_redis_host = os.environ.get("REDIS_HOST", "127.0.0.1")
_redis_port = os.environ.get("REDIS_PORT", "6379")
_redis_password = os.environ.get("REDIS_PASSWORD", "")
CACHES = {
        "db": {
            "BACKEND": "django.core.cache.backends.db.DatabaseCache",
            "LOCATION": "django_cache",
            },
        "login_db": {
            "BACKEND": "django.core.cache.backends.db.DatabaseCache",
            "LOCATION": "account_cache",
            },
        "mem": {"BACKEND": "django.core.cache.backends.locmem.LocMemCache"},
        "redis": {
            "BACKEND": "redis_cache.RedisCache",
            "LOCATION": f"{_redis_host}:{_redis_port}",
            "OPTIONS": {
                "DB": 1,
                "PASSWORD": _redis_password,
                "PARSER_CLASS": "redis.connection.HiredisParser",
                "CONNECTION_POOL_CLASS": "redis.BlockingConnectionPool",
                "PICKLE_VERSION": -1,
                }
            }
        }
CACHES["default"] = CACHES["db"]

USE_TZ = True
TIME_ZONE = "Asia/Shanghai"
LANGUAGE_CODE = "zh-hans"

LANGUAGES = (
    ("en", u"English"),
    ("zh-hans", u"简体中文"),
)
# -----------------------------------------------------------------------------

# -----------------------------------------------------------------------------
# 以下为框架代码 请勿修改
# celery settings
if IS_USE_CELERY:
    INSTALLED_APPS = locals().get("INSTALLED_APPS", [])
    INSTALLED_APPS += ("celery", "django_celery_beat", "django_celery_results")
    CELERYBEAT_SCHEDULER = "django_celery_beat.schedulers.DatabaseScheduler"

    REDIS_HOST = os.environ.get('REDIS_HOST')
    REDIS_PORT = int(os.environ.get('REDIS_PORT', 6379))
    REDIS_PASSWORD = os.environ.get('REDIS_PASSWORD')

    RABBITMQ_VHOST = os.getenv('RABBITMQ_VHOST')
    RABBITMQ_PORT = os.getenv('RABBITMQ_PORT')
    RABBITMQ_HOST = os.getenv('RABBITMQ_HOST')
    RABBITMQ_USER = os.getenv('RABBITMQ_USER')
    RABBITMQ_PASSWORD = os.getenv('RABBITMQ_PASSWORD')

    BROKER_URL = 'amqp://{user}:{password}@{host}:{port}/{vhost}'.format(
    user=RABBITMQ_USER,
    password=RABBITMQ_PASSWORD,
    host=RABBITMQ_HOST,
    port=RABBITMQ_PORT,
    vhost=RABBITMQ_VHOST,
    )

    # broker_url = f'redis://:{REDIS_PASSWORD}@{REDIS_HOST}:{REDIS_PORT}/0'
    #BROKER_URL = f'redis://:{REDIS_PASSWORD}@{REDIS_HOST}:{REDIS_PORT}/0'

    #result_backend = 'rpc://'
    #result_backend = f'redis://:{REDIS_PASSWORD}@{REDIS_HOST}:{REDIS_PORT}/0'
    MYSQL_NAME = os.getenv('MYSQL_NAME')
    MYSQL_PORT = os.getenv('MYSQL_PORT')
    MYSQL_HOST = os.getenv('MYSQL_HOST')
    MYSQL_USER = os.getenv('MYSQL_USER')
    MYSQL_PASSWORD = os.getenv('MYSQL_PASSWORD')

    CELERY_CACHE_BACKEND = 'default'
    CELERY_RESULT_BACKEND = f'db+mysql://{MYSQL_USER}:{MYSQL_PASSWORD}@{MYSQL_HOST}:{MYSQL_PORT}/{MYSQL_NAME}'

# remove disabled apps
if locals().get("DISABLED_APPS"):
    INSTALLED_APPS = locals().get("INSTALLED_APPS", [])
    DISABLED_APPS = locals().get("DISABLED_APPS", [])

    INSTALLED_APPS = [_app for _app in INSTALLED_APPS if _app not in DISABLED_APPS]

    _keys = (
        "AUTHENTICATION_BACKENDS",
        "DATABASE_ROUTERS",
        "FILE_UPLOAD_HANDLERS",
        "MIDDLEWARE",
        "PASSWORD_HASHERS",
        "TEMPLATE_LOADERS",
        "STATICFILES_FINDERS",
        "TEMPLATE_CONTEXT_PROCESSORS",
    )

    import itertools

    for _app, _key in itertools.product(DISABLED_APPS, _keys):
        if locals().get(_key) is None:
            continue
        locals()[_key] = tuple(
            [_item for _item in locals()[_key] if not _item.startswith(_app + ".")]
        )
# -----------------------------------------------------------------------------


# 前后端分离开发配置开关，设置为True时dev和stag环境会自动加载允许跨域的相关选项
FRONTEND_BACKEND_SEPARATION = False
FRONTEND_DIST_NAME = 'dist'
#FRONTEND_DIST_NAME = os.getenv("FRONTEND_DIST_NAME", "dist")

TEMPLATES = [
        {
            "BACKEND": "django.template.backends.django.DjangoTemplates",
            "DIRS": (
                os.path.join(BASE_DIR, 'frontend', FRONTEND_DIST_NAME),
                os.path.join(BASE_DIR, 'staticfiles'),
                ),
            "APP_DIRS": True,
            "OPTIONS": {
                "context_processors": [
                    "django.template.context_processors.debug",
                    "django.template.context_processors.request",
                    "django.contrib.auth.context_processors.auth",
                    "django.contrib.messages.context_processors.messages",
                    "blueapps.template.context_processors.blue_settings",
                    ],
                },
            }
        ]

TIMEOUT = 300

#bk_domain = os.environ.get('BKPAAS_BK_DOMAIN', '')
#HOSTENV = bk_domain.split('.')[0]

# 测试profile
NUM_SLOW_TESTS = 10

# 本地开发环境下，前端静态资源的URL前缀
SITE_URL = ""

# STATIC_VERSION_BEGIN
# 静态资源文件(js,css等）在APP上线更新后, 由于浏览器有缓存,
# 可能会造成没更新的情况. 所以在引用静态资源的地方，都把这个加上
# Django 模板中：<script src="/a.js?v={{ STATIC_VERSION }}"></script>
# mako 模板中：<script src="/a.js?v=${ STATIC_VERSION }"></script>
# 如果静态资源修改了以后，上线前改这个版本号即可
# STATIC_VERSION_END
STATIC_VERSION = "1.0"

STATICFILES_DIRS = [os.path.join(BASE_DIR, "frontend", FRONTEND_DIST_NAME)]  # noqa

STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles/")

if DEV_MODE:
    STATIC_URL = "/static/" # pylint: disable=undefined-variable
else:
    STATIC_URL = "/coral/static/"

# -----------------------------------------------------------------------------
# 需要自己魔改的一些配置
MINI_CACHE_TIME = 60 * 5 # 分钟级缓存时间，默认5分钟
HOUR_CACHE_TIME = 60 * 60 * 2 # 小时级缓存时间，默认2小时

# 在DEV_MODE下开启的配置
if DEV_MODE:
   # SITE_URL = "/static2/"
    MIDDLEWARE += ["api.middleware.ProfileMiddleware",]
# -----------------------------------------------------------------------------
