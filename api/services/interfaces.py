
from typing import Tuple

from django.conf import settings
from rest_framework.request import Request

from api.errors import ServiceError
from api.errors import ViewError
from common.log import logger

class ServiceInterface(object):

    def prepare(self, request: Request) -> Tuple[str, str]:
        """
        Prepare the service for the request
        @param request: the request object
        @return: the message and error
        """
        raise NotImplementedError
