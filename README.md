# BruinMeet
A unified, interactive platform for UCLA students to search and create social groups

## Dependencies
1. Python 2.7

## Test app
`cd BruinMeet`

`source bruin_meet_env/bin/activate` to enter python virtual env

`./node_modules/.bin/webpack --config webpack.config.js` if you modify the React code at assets/js/index.js

`mv bruin_meet_project/settings_secret.py.template bruin_meet_project/settings_secret.py`

Enter in your own secret key and username/password for Postgresql in bruin_meet_project/settings_secret.py

`sudo su - postgres`
`psql`
`CREATE DATABASE bruin_meet;
`CREATE USER bruin_meet_user WITH PASSWORD 'bruin_meet_pass';`
`GRANT ALL PRIVILEGES ON DATABASE bruin_meet TO bruin_meet_user;`
`\q`
`exit`   

`python manage.py makemigrations`
`python manage.py migrate`
`python manage.py runserver` to start server, view at localhost:8080

`deactivate` to exit python virtual env

## Other
Forward all comments/bugs to bruinmeet.devx@gmail.com
