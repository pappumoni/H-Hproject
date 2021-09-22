from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(response):
    return render(response, "trainings/trindex.html", {})

def trainingReg(response):
    return render(response, "trainings/t_reg.html", {})

def trainProfile(response):
    return render(response, "trainings/t_profile.html", {})
