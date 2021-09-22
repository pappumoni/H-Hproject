from django.shortcuts import render
from django.http import HttpResponse, request

# Create your views here.
def error_404_view(response, exception):
    return render(response, "main/404.html")

def error_500_view(response):
    return render(response, "main/500.html")

def index(response):
    return render(response, "main/index.html", {'hm':'/index'})

def about(response):
    return render(response, "main/about.html", {})

def notifications(response):
    return render(response, "main/notifications.html", {})

def gallery(response):
    return render(response, "main/gallery.html")

def disclaimer(response):
    return render(response, "main/disclaimer.html")