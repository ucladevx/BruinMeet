"""bruin_meet_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
import bruin_meet_project.views

admin.autodiscover()

urlpatterns = [
    url(r'^$', bruin_meet_project.views.welcome, name='welcome'),
    url(r'^get_meetups/', bruin_meet_project.views.get_meetups, name='get_meetups'),
    url(r'^login/', bruin_meet_project.views.login, name='login'),
    url(r'^signup/', bruin_meet_project.views.signup, name='signup'),
    url(r'^create_meetup/', bruin_meet_project.views.create_meetup, name='create_meetup'),
    url(r'^edit_meetup/', bruin_meet_project.views.edit_meetup, name='edit_meetup'),
    url(r'^delete_meetup/', bruin_meet_project.views.delete_meetup, name='delete_meetup'),
    url(r'^get_current_user/', bruin_meet_project.views.get_current_user, name='get_current_user'),
    url(r'^logout/', bruin_meet_project.views.logout, name='logout'),
    url(r'^admin/', admin.site.urls)
]
