from django.http import HttpResponse
from django.shortcuts import render
from django.template import Context, Template

import user, utils

def welcome(request):
    return render(request, 'index.html')
    
def home(request):
    return render(request, 'home.html')

def login(request):
    if request.method == "GET":
        return render(request, 'login.html')
    elif request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('password')

        if is_valid_user(email, password):
            return redirect('/home')
        else:
            return False

def signup(request):
    if request.method == "GET":
        return render(request, 'signup.html')
    elif request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('password')

        valid_email = is_valid_email(email)
    
        if valid_info:
            status = user.insert_user(email, password)
            if status:
                return redirect('/home')
            else:
                return render(request, '505.html')
        else:
            return False
