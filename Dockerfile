FROM dev-lcms-harbor.lotuscars.com.cn/library/python:3.7.9

COPY bkapi_client_core /opt/aloe/bkapi_client_core
COPY common /opt/aloe/common
COPY config /opt/aloe/config
COPY frontend /opt/aloe/frontend
COPY locale /opt/aloe/locale
COPY rest /opt/aloe/rest
COPY static /opt/aloe/static
COPY tempcache /opt/aloe/tempcache
COPY userhub /opt/aloe/userhub
COPY *.py /opt/aloe/
COPY venv /venv

# RUN pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple/

ENTRYPOINT ["/venv/bin/python","/opt/aloe/manage.py","runserver","0.0.0.0:5000"]
