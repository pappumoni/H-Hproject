from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="t_index"),
    path("trainingReg/", views.trainingReg, name="t_reg"),
    path("trainProfile/", views.trainProfile, name="t_profile"),
]