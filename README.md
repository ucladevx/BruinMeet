# BruinMeet
A unified, interactive platform for UCLA students to search and create social groups

## Dependencies
1. Python 2.7

## Test app
1. `cd BruinMeet`

2. `source bruin_meet_env/bin/activate` to enter python virtual env

3. `./node_modules/.bin/webpack --config webpack.config.js` if you modify the React code at assets/js/index.js

4. `mv bruin_meet_project/settings_secret.py.template bruin_meet_project/settings_secret.py`

5. Enter in your own secret key and username/password for Postgresql in bruin_meet_project/settings_secret.py

5. `python manage.py runserver` to start server, view at localhost:8080

6. `deactivate` to exit python virtual env

## Other
Forward all comments/bugs to bruinmeet.devx@gmail.com
