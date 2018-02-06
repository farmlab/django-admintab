from django.contrib import admin

from admintab.admin import ChangeListAdminMixin

from .models import Dummy

@admin.register(Dummy)
# class DummyAdmin(ChangeListAdminMixin):
class DummyAdmin(ChangeListAdminMixin):
    list_filter=["name"]
    search_fields=["name"]
    change_list_tab = [ 
            ("Table", "admintab/admin/change_list_base.html"),
            ("Tab2", "admintab/change_list_tab2.html")
            ]

    def changelisttab(self, request, context):
        context["tab2"] = "Title"
        return request, context

