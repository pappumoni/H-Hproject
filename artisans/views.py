from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(response):
    return HttpResponse("<h1>This is my Landing Page in Artisans</h1>")
    
def registration(response):
    return render(response, "artisans/reg2.html", {})

def arprofile(response):
    return render(response, "artisans/arprofile.html", {})
