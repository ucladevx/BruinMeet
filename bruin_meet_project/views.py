from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.template import Context, Template, loader

import user, meetup, production, utils

# Landing page
def welcome(request):
    if request.method == "GET":
        return render(request, 'index.html')

# API to get all meetups
def get_meetups(request):
    if request.method == "GET":
        cookie = request.get_signed_cookie(key="uID", default=False, salt=production.uID_salt)
        if cookie:
            cookie_uID = utils.check_cookie(cookie)
            if cookie_uID:
                user_meetups = meetup.get_user_meetups(cookie_uID)
                nonuser_meetups = meetup.get_nonuser_meetups(cookie_uID)
                print "user_meetups:", user_meetups
                print "nonuser_meetups:", nonuser_meetups
                response = JsonResponse({'valid_user': 'True', 'user_meetups': user_meetups, 'nonuser_meetups':nonuser_meetups})
                return response
        user_meetups = []
        nonuser_meetups = meetup.get_all_meetups()
        print "nonuser_meetups", nonuser_meetups
        response = JsonResponse({'valid_user': 'False', 'user_meetups': user_meetups, 'nonuser_meetups': nonuser_meetups})
        return response
    response = HttpResponse()
    response.status_code = 403
    return response

# API to authenticate login info
def login(request):
    if request.method == "POST":
        email = str(request.POST.get('email'))
        password = str(request.POST.get('password'))
        user_id = user.is_valid_login(email, password)
        if user_id:
            response = HttpResponse('{\"Result\":\"Success\", \"user_id\":\"' + user_id +'\"}')
            response.set_signed_cookie(key="uID", value=utils.make_cookie(user_id), salt=production.uID_salt)
            return response
        response = HttpResponse('False')
        return response
    response = HttpResponse()
    response.status_code = 403
    return response

def logout(request):
    response = HttpResponse()
    if request.method == "POST":
        response.delete_cookie(key="uID")
        return response
    response.status_code = 403
    return response

# API to create new user
def signup(request):
    if request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('password')
        if user.is_valid_email(email):
            if not user.is_email_already_used(email):
                user_id = user.insert_user(email, password)
                if user_id:
                    response = HttpResponse('{\"Result\":\"Success\", \"user_id\":\"' + user_id +'\"}')
                    response.set_signed_cookie(key="uID", value=utils.make_cookie(user_id), salt=production.uID_salt)
                    return response
                else:
                    response = HttpResponse('{\"Result\":\"Failure\",\"Reason\":\"Invalid User\"')
            else:
                response = HttpResponse('{\"Result\":\"Failure\",\"Reason\":\"Email Already Used\"}')
                return response
        else:
            response = HttpResponse('{\"Result\":\"Failure\",\"Reason\":\"Invalid Email\"}')
            return response
    response = HttpResponse()
    response.status_code = 403
    return response

def create_meetup(request):
    if request.method == "POST":
        title = request.POST.get('title')
        description = request.POST.get('description')
        t_time = request.POST.get('timestamp')
        location = request.POST.get('location')
        maxim_cap = request.POST.get('maxim_cap')
        people = request.POST.get('people')
        type_event = request.POST.get('type_event')
        tags = request.POST.get('tags')

        cookie = request.get_signed_cookie(key="uID", default=False, salt=production.uID_salt)
        if cookie:
            cookie_uID = utils.check_cookie(cookie)
            if cookie_uID:
                created_meetup = meetup.insert_meetup(title, description, t_time, location, maxim_cap, people, cookie_uID, type_event, tags)
                if created_meetup:
                    response = HttpResponse('True')
                    return response
        response = HttpResponse('False')
        return response

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
        tags = request.POST.get('tags')

        hash_seed = str(title) + str(description) + str(t_time) + str(location) + str(maxim_cap) + str(user_id)
        new_meetup_id = utils.create_hash(hash_seed)

        if meetup.edit_meetup(meetup_id, new_meetup_id, title, description, t_time, location, maxim_cap, people, user_id, num_stars, tags):
            response = JsonResponse({ 'Result': 'True', 'new_meetup_id': new_meetup_id })
            return response
        else:
            response = HttpResponse('False')
            return response
    response = HttpResponse()
    response.status_code = 403
    return response

# API to add user to meetup
def add_user_to_meetup(request):
    if request.method == "POST":
        cookie = request.get_signed_cookie(key="uID", default=False, salt=production.uID_salt)
        if not cookie:
            return False
        cookie_uID = utils.check_cookie(cookie)
        if not cookie_uID:
            return False

        meetup_id = request.POST.get('meetup_id')
        user_id = request.POST.get('new_user_id')
        get_userID_from_meetupID(meetup_id)

        rv = meetup.add_user_to_meetup(meetup_id, user_id)
        if not rv:
            response = HttpResponse('{\"Result\":\"Failure\",\"Reason\":\"Your request to join is rejected!\"')
        else:
            response = HttpResponse('{\"Result\":\"Failure\",\"Reason\":\"Congrats! You have been successfully added to the event!\"')
        return response
    else:
        response = HttpResponse()
        response.status_code = 500
        return response

# API to remove meetup
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

# current user
def get_current_user(request):
    if request.method == 'GET':
        cookie = request.get_signed_cookie(key="uID", default=False, salt=production.uID_salt)
        if cookie:
            cookie_uID = utils.check_cookie(cookie)
            cur_user = user.get_user(cookie_uID)
            if cur_user:
                return JsonResponse(cur_user)
        else:
            response = HttpResponse()
            response.status_code = 403
            return response
