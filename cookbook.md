# 开发手册

## 如何启动开发环境

1. 新建dev.env文件

```
export BKPAAS_APP_CODE=coral
export BKPAAS_APP_ID=coral
export BKPAAS_APP_LOG_PATH=/app/v3logs
export BKPAAS_APP_MODULE_NAME=default
export BKPAAS_APP_SECRET=****
export BKPAAS_BK_DOMAIN=domain.com
export BKPAAS_CC_URL=http://cmdb.domain.com
export BKPAAS_CI_URL=http://devops.domain.com
export BKPAAS_CODECC_URL=http://devops.domain.com/console/codelib
export BKPAAS_CONSOLE_URL=http://bk7.domain.com/console/
export BKPAAS_DEFAULT_PREALLOCATED_URLS='{"stag": "http://apps.domain.com/stag--default--coral/", "prod": "http://apps.domain.com/prod--default--coral/"}'
export BKPAAS_DEFAULT_SUBPATH_ADDRESS=http://apps.domain.com/coral/
export BKPAAS_ENGINE_APP_NAME=bkapp-coral-prod
export BKPAAS_ENGINE_REGION=default
export BKPAAS_ENVIRONMENT=prod
export BKPAAS_IAM_URL=http://bkiam.domain.com
export BKPAAS_JOB_URL=http://job.domain.com
export BKPAAS_LOGIN_URL=http://bk7.domain.com/login/
export BKPAAS_LOG_NAME_PREFIX=default-bkapp-coral-prod-web
export BKPAAS_LOG_URL=http://bklog.domain.com
export BKPAAS_MAJOR_VERSION=3
export BKPAAS_MONITORV3_URL=http://bkmonitor.domain.com
export BKPAAS_PIPELINE_URL=http://devops.domain.com/console/pipeline
export BKPAAS_PROCESS_TYPE=web
export BKPAAS_REMOTE_STATIC_URL=http://example.com/static_api/
export BKPAAS_REPO_URL=http://bkrepo.domain.com
export BKPAAS_SUB_PATH=/coral/
export BKPAAS_TURBO_URL=http://devops.domain.com/console/turbo
export BKPAAS_URL=http://bkpaas.domain.com
export BKPAAS_USER_URL=http://bkuser.domain.com
export BKPAAS_WEIXIN_REMOTE_STATIC_URL=http://localhost:8080//static_api/
export BKPAAS_WEIXIN_URL=http://localhost:8080/
export BKREPO_BUCKET=private-bkapp-coral--3BK_IAM_V3_APP_CODE=bk_iam
export BKREPO_CONF='{"endpoint": "http://bkrepo.domain.com/generic/", "project": "bkpaas", "bucket": "bkpaas3-slug-packages", "user": "bkpaas3", "password": "****"}'
export BKREPO_ENDPOINT_URL=http://bkrepo.domain.com
export BKREPO_PASSWORD=****
export BKREPO_PRIVATE_BUCKET=private-bkapp-coral--3
export BKREPO_PROJECT=bksaas-addons
export BKREPO_PUBLIC_BUCKET=public-bkapp-coral--3
export BKREPO_USERNAME=bkapp-coral--3
export BK_API_URL_TMPL=http://bkapi.domain.com/api/{api_name}
export BK_CC_HOST=http://cmdb.domain.com
export BK_COMPONENT_API_URL=http://bkapi.domain.com
export BK_DOCS_URL_PREFIX=https://bk.tencent.com/docs
export BK_IAM_INNER_HOST=http://:
export BK_IAM_V3_INNER_HOST=http://bkiam-api.domain.com
export BK_JOB_HOST=http://job.domain.com
export BK_LOGIN_URL=http://bk7.domain.com/login/
export BK_LOGIN_INNER_URL=http://bk7.domain.com/login/
export BK_PAAS2_URL=http://bk7.domain.com
export DEFAULT_BKAPP_CORAL_PROD_BEAT_PORT=tcp://10.233.24.110:80
export DEFAULT_BKAPP_CORAL_PROD_BEAT_PORT_80_TCP=tcp://10.233.24.110:80
export DEFAULT_BKAPP_CORAL_PROD_BEAT_PORT_80_TCP_ADDR=10.233.24.110
export DEFAULT_BKAPP_CORAL_PROD_BEAT_PORT_80_TCP_PORT=80
export DEFAULT_BKAPP_CORAL_PROD_BEAT_PORT_80_TCP_PROTO=tcp
export DEFAULT_BKAPP_CORAL_PROD_BEAT_SERVICE_HOST=10.233.24.110
export DEFAULT_BKAPP_CORAL_PROD_BEAT_SERVICE_PORT=80
export DEFAULT_BKAPP_CORAL_PROD_BEAT_SERVICE_PORT_HTTP=80
export DEFAULT_BKAPP_CORAL_PROD_WEB_PORT=tcp://10.233.18.173:80
export DEFAULT_BKAPP_CORAL_PROD_WEB_PORT_80_TCP=tcp://10.233.18.173:80
export DEFAULT_BKAPP_CORAL_PROD_WEB_PORT_80_TCP_ADDR=10.233.18.173
export DEFAULT_BKAPP_CORAL_PROD_WEB_PORT_80_TCP_PORT=80
export DEFAULT_BKAPP_CORAL_PROD_WEB_PORT_80_TCP_PROTO=tcp
export DEFAULT_BKAPP_CORAL_PROD_WEB_SERVICE_HOST=10.233.18.173
export DEFAULT_BKAPP_CORAL_PROD_WEB_SERVICE_PORT=80
export DEFAULT_BKAPP_CORAL_PROD_WEB_SERVICE_PORT_HTTP=80
export DEFAULT_BKAPP_CORAL_PROD_WORKER_PORT=tcp://10.233.32.52:80
export DEFAULT_BKAPP_CORAL_PROD_WORKER_PORT_80_TCP=tcp://10.233.32.52:80
export DEFAULT_BKAPP_CORAL_PROD_WORKER_PORT_80_TCP_ADDR=10.233.32.52
export DEFAULT_BKAPP_CORAL_PROD_WORKER_PORT_80_TCP_PORT=80
export DEFAULT_BKAPP_CORAL_PROD_WORKER_PORT_80_TCP_PROTO=tcp
export DEFAULT_BKAPP_CORAL_PROD_WORKER_SERVICE_HOST=10.233.32.52
export DEFAULT_BKAPP_CORAL_PROD_WORKER_SERVICE_PORT=80
export DEFAULT_BKAPP_CORAL_PROD_WORKER_SERVICE_PORT_HTTP=80

export MYSQL_PASSWORD=****
export MYSQL_NAME=bkapp-coral-pr-3
export MYSQL_PORT=3306
export MYSQL_USER=bkapp-coral-pr-3
export MYSQL_HOST=bk-mysql-mysql.blueking.svc.cluster.local
export REDIS_PASSWORD=****
export REDIS_PORT=6379
export REDIS_HOST=bk-redis-master.blueking.svc.cluster.local
export RABBITMQ_VHOST=app-bkapp-coral-prod-a714
export RABBITMQ_USER=app-bkapp-coral-prod-a714
export RABBITMQ_HOST=bk-rabbitmq.blueking.svc.cluster.local
export RABBITMQ_PASSWORD=****
export RABBITMQ_PORT=5672

export ALLOWED_HOSTS=dev.domain.com,dev-api.domain.com,ne.domain.com
export DEV_MODE=true

export VITE_PUBLIC_PATH=static
```

2. 启动后端执行

```
python manage.py migrate
python manage.py runserver 0.0.0.0:5000
```

3. 启动前端

先参考Vue3+Naive-UI-Admin的文档

[Naive-UI-Admin构建&部署](https://docs.naiveadmin.com/guide/deploy.html)

```
cd frontend/src
yarn build
python manage.py collectstatic # 这里会收集配置的static文件到staticfiles目录
```
