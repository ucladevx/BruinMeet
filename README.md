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

6. `sudo su - postgres`
   `psql`
   `CREATE DATABASE bruin_meet;
   `CREATE USER bruin_meet_user WITH PASSWORD 'bruin_meet_pass';`
   `GRANT ALL PRIVILEGES ON DATABASE bruin_meet TO bruin_meet_user;`
   `\q`
   `exit`   

7. `python manage.py makemigrations`
   `python manage.py migrate`
   `python manage.py runserver` to start server, view at localhost:8080

8. `deactivate` to exit python virtual env

## Other
Forward all comments/bugs to bruinmeet.devx@gmail.com
