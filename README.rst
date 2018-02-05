=============================
django-admintab
=============================

.. image:: https://badge.fury.io/py/django-admintab.svg
    :target: https://badge.fury.io/py/django-admintab

.. image:: https://travis-ci.org/farmlab/django-admintab.svg?branch=master
    :target: https://travis-ci.org/farmlab/django-admintab

.. image:: https://codecov.io/gh/farmlab/django-admintab/branch/master/graph/badge.svg
    :target: https://codecov.io/gh/farmlab/django-admintab

Provide tabs for change_list in the django admin interface

Documentation
-------------

The full documentation is at https://django-admintab.readthedocs.io.

Quickstart
----------

Install django-admintab::

    pip install django-admintab

Add it to your `INSTALLED_APPS`:

.. code-block:: python

    INSTALLED_APPS = (
        ...
        'admintab.apps.AdmintabConfig',
        ...
    )

Add django-admintab's URL patterns:

.. code-block:: python

    from admintab import urls as admintab_urls


    urlpatterns = [
        ...
        url(r'^', include(admintab_urls)),
        ...
    ]

Features
--------

* TODO

Running Tests
-------------

Does the code actually work?

::

    source <YOURVIRTUALENV>/bin/activate
    (myenv) $ pip install tox
    (myenv) $ tox

Credits
-------

Tools used in rendering this package:

*  Cookiecutter_
*  `cookiecutter-djangopackage`_

.. _Cookiecutter: https://github.com/audreyr/cookiecutter
.. _`cookiecutter-djangopackage`: https://github.com/pydanny/cookiecutter-djangopackage
