from django.http import HttpResponse
from django.shortcuts import render
from django.template import Context, Template, loader

import user, meetup, production

# Landing page
def welcome(request):
    if request.method == "GET":
        cookie = request.get_signed_cookie(key="uID", default=False, salt=production.uID_salt)
        if cookie:
            cookie_uID = utils.check_cookie(cookie)
            if cookie_uID:
                user_meetups = meetup.get_user_meetups(cookie_uID)
                nonuser_meetups = meetup.get_nonuser_meetups(cookie_uID)
                return render(request, 'index.html',
                              {'validUser': 'True',
                               'user_meetups': user_meetups,
                               'nonuser_meetups': nonuser_meetups})
        nonuser_meetups = meetup.get_all_meetups()    
        return render(request, 'index.html',
                      {'validUser': 'False',
                       'nonuser_meetups': nonuser_meetups})
    return False

# API to authenticate login info
def login(request):
    if request.method == "POST":
        email = str(request.POST.get('email'))
        password = str(request.POST.get('password'))
        user_id = user.is_valid_login(email, password)
        if user_id:
            HttpResponse.set_signed_cookie(key="uID", value=utils.make_cookie(user_id), salt=production.uID_salt)
            return True
    return False

# API to create new user
def signup(request):
    if request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('password')
        if is_valid_email(email):
            user_id = user.insert_user(email, password)
            if user_id:
                response.set_signed_cookie(key="uID", value=utils.make_cookie(user_id), salt=production.uID_salt)
                return True
    return False

# API to create meetup
def create_meetup(request):
    if request.method == "POST":
        title = request.POST.get('title')
        description = request.POST.get('description')
        t_time = request.POST.get('timestamp')
        location = request.POST.get('location')
        maxim_cap = request.POST.get('maxim_cap')
        people = request.POST.get('people')

        cookie = request.get_signed_cookie(key="uID", default=False, salt=production.uID_salt)
        if cookie:
            cookie_uID = utils.check_cookie(cookie)
            if cookie_uID:
                created_meetup = meetup.insert_meetup(title, description, t_time, location, maxim_cap, people, cookie_uID)
                if created_meetup:
                    return True
    return False
