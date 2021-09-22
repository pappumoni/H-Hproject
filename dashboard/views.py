from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(response):
    return render(response, "dashboard/dshindex.html", {})

def pjDetails(response):
    return render(response, "dashboard/projectDetails.html", {})