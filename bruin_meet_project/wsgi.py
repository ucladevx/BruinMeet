"""
WSGI config for bruin_meet_project project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/howto/deployment/wsgi/
"""

import os
import sys

from django.core.wsgi import get_wsgi_application

sys.path.append("/usr/local/apache2/htdocs/BruinMeet/")
os.environ["DJANGO_SETTINGS_MODULE"] = "bruin_meet_project.settings"

application = get_wsgi_application()
