=============================
django-admintab
=============================

.. image:: https://badge.fury.io/py/django-admintab.svg
    :target: https://badge.fury.io/py/django-admintab

.. image:: https://travis-ci.org/farmlab/django-admintab.svg?branch=master
    :target: https://travis-ci.org/farmlab/django-admintab

.. image:: https://codecov.io/gh/farmlab/django-admintab/branch/master/graph/badge.svg
    :target: https://codecov.io/gh/farmlab/django-admintab

Django-admintab package provides a simple tab feature within change_list views in the django admin interface.

Uses cases:

* Simple model dashboard
* Displaying your data as graph or map
* ...

Documentation
-------------

The full documentation is at https://django-admintab.readthedocs.io.

Quickstart
----------

Install django-admintab::

    pip install git+https://github.com/farmlab/django-admintab.git

Add it to your `INSTALLED_APPS`:

.. code-block:: python

    INSTALLED_APPS = (
        ...
        'admintab.apps.AdmintabConfig',
        ...
    )

Features
--------

* make use of all functionalities of the standart django change_list view (filtering, searching ...)
* no dependency

TODO
----

* better documention
* tests
* and then release on pypi



Running Tests
-------------

Does the code actually work?

::

    source <YOURVIRTUALENV>/bin/activate
    (myenv) $ pip install tox
    (myenv) $ tox

Credits
-------

.. image:: _static/agrobioperigord.png


Tools used in rendering this package:

*  Cookiecutter_
*  `cookiecutter-djangopackage`_

.. _Cookiecutter: https://github.com/audreyr/cookiecutter
.. _`cookiecutter-djangopackage`: https://github.com/pydanny/cookiecutter-djangopackage
