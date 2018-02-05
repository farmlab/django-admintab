=====
Usage
=====

To use django-admintab in a project, add it to your `INSTALLED_APPS`:

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
