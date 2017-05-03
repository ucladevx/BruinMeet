from django.http import HttpResponse
from django.shortcuts import render
from django.template import Context, Template, loader

import user, meetup, production

conn_str = production.conn_str
sql_mm = production.sql_mm

# Landing page
def welcome(request):
    meetups = meetup.get_all_meetups()    
    return render(request, 'index.html', {'meetups': meetups,})

# Individualized home page
def home(request):
    return render(request, 'home.html')

# Login page
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

# Signup page
def signup(request):
    if request.method == "GET":
        return render(request, 'signup.html')
    elif request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('password')

        valid_email = is_valid_email(email)
        
        if valid_email:
            status = user.insert_user(email, password)
            if status:
                return redirect('/home')
            else:
                return render(request, '505.html')
        else:
            return False
    else:
        print "No such page for method", request.method
        return render(request, '404.html')

# API to create meetup, called by react
def create_meetup(request):
    if request.method == "POST":
        title = request.POST.get('title')
        description = request.POST.get('description')
        t_time = request.POST.get('timestamp')
        location = request.POST.get('location')
        maxim_cap = request.POST.get('maxim_cap')
        people = request.POST.get('people')

        created_meetup = meetup.insert_meetup(title, description, t_time, location, maxim_cap, people)
        return redirect('\home')
    else:
        print "No such page for method", request.method
        return render(request, '404.html')
