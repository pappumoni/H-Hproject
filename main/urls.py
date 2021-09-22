from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="mindex"),
    path("about/", views.about, name="about"),
    path("notifications/", views.notifications, name="notifications"),
    path("gallery/", views.gallery, name="gallery"),
    path("disclaimer/", views.disclaimer, name="disclaimer"),
]