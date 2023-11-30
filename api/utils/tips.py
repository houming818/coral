import re

def camel_to_underline(name):
    return re.sub(r'(?<!^)(?=[A-Z])', '_', name).lower()
