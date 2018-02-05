# -*- coding: utf-8 -*-
from __future__ import unicode_literals, absolute_import

from django.conf.urls import url, include

from admintab.urls import urlpatterns as admintab_urls

urlpatterns = [
    url(r'^', include(admintab_urls, namespace='admintab')),
]
