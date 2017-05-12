from django.http import HttpResponse
from django.shortcuts import render
from django.template import Context, Template, loader

import user, meetup, production, utils

# Landing page
def welcome(request):
    if request.method == "GET":
        cookie = request.get_signed_cookie(key="uID", default=False, salt=production.uID_salt)
        if cookie:
            cookie_uID = utils.check_cookie(cookie)
            if cookie_uID:
                user_meetups = meetup.get_user_meetups(cookie_uID)
                nonuser_meetups = meetup.get_nonuser_meetups(cookie_uID)
                print "user_meetups:", user_meetups
                print "nonuser_meetups:", nonuser_meetups
                return render(request, 'index.html',
                              {'validUser': 'True',
                               'user_meetups': user_meetups,
                               'nonuser_meetups': nonuser_meetups})
        nonuser_meetups = meetup.get_all_meetups()
        print "nonuser_meetups", nonuser_meetups
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
            response = HttpResponse('yay')
            response.set_signed_cookie(key="uID", value=utils.make_cookie(user_id), salt=production.uID_salt)
            return response
    response = HttpResponse()
    response.status_code = 403
    return response

# API to create new user
def signup(request):
    if request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('password')
        if user.is_valid_email(email):
            user_id = user.insert_user(email, password)
            if user_id:
                response = HttpResponse('{\"Result\":\"Success\"}')
                response.set_signed_cookie(key="uID", value=utils.make_cookie(user_id), salt=production.uID_salt)
                return response
            else:
                response = HttpResponse('{\"Result\":\"Failure\",\"Reason\":\"Email Already Used\"}')
                return response
        else:
            response = HttpResponse('{\"Result\":\"Failure\",\"Reason\":\"Invalid Email\"}')
            return response
    response = HttpResponse('{\"Result\":\"Failure\",\"Reason\":\"Not a POST request\"}')
    return response

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

def edit_meetup(request):
    if request.method == "POST":
        cookie = request.get_signed_cookie(key="uID", default=False, salt=production.uID_salt)
        if not cookie:
            return False
        cookie_uID = utils.check_cookie(cookie)
        if not cookie_uID:
            return False
        
        meetup_id = request.POST.get('meetup_id')
        # if the meetup that has meetup_id not have user id = cookieUID then return false
        # get meetup for meetup_id
        user_id = meetup.get_userID_from_meetupID(meetup_id)
        if user_id != cookie_uID:
            return False # User trying to modify another's meetup
        
        title = request.POST.get('new_title')
        description = request.POST.get('new_description')
        t_time = request.POST.get('new_timestamp')
        location = request.POST.get('new_location')
        maxim_cap = request.POST.get('new_maxim_cap')
        people = request.POST.get('new_people')
        num_stars = request.POST.get('num_stars')
        
        hash_seed = str(title) + str(description) + str(t_time) + str(location) + str(maxim_cap) + str(user_id)
        new_meetup_id = utils.create_hash(hash_seed)
        
        if meetup.edit_meetup(meetup_id, new_meetup_id, title, description, t_time, location, maxim_cap, people, user_id, num_stars):
            return True
        
    return False

def delete_meetup(request):
    if request.method == "POST":
        cookie = request.get_signed_cookie(key="uID", default=False, salt=production.uID_salt)
        if not cookie:
            return False
        cookie_uID = utils.check_cookie(cookie)
        if not cookie_uID:
            return False
        
        meetup_id = request.POST.get('meetup_id')
        user_id = meetup.get_userID_from_meetupID(meetup_id)
        if user_id != cookie_uID:
            return False # User trying to modify another's meetup

        if meetup.delete_meetup(meetup_id):
            return True

    return False
