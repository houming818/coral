# -*- coding: utf-8 -*-

import sys, os, types
import logging

logger = logging.getLogger()

fm = logging.Formatter('%(levelname)s %(asctime)s %(module)s.%(funcName)s@%(lineno)d %(message)s')
fh = logging.StreamHandler(sys.stdout)

fh.setFormatter(fm)

logger.addHandler(fh)
logger.setLevel(logging.INFO)

#if os.environ.get('LTS_DEV') == "dev":
#    logger.setLevel(logging.DEBUG)
