from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="dshindex"),
    path("projectDetails/", views.pjDetails, name="pjDetails"),
]