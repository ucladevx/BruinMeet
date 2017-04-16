from django.http import HttpResponse
from django.shortcuts import render
from django.template import Context, Template

def home_page(request):
    return render(request, 'index.html')

    #return render(request, "./templates/home.html", {})

    text = """<h1>Welcome to bruinmeet<h1>"""
    return HttpResponse(text)
