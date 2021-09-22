from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("reg/", views.registration, name="reg"),
    path("arprofile/", views.arprofile, name="arprofile"),
]