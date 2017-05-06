# BruinMeet
A unified, interactive platform for UCLA students to search and create social groups.

Forward all comments/suggestions/bugs to bruinmeet.devx@gmail.com

## Dependencies
Python 2.7, Django, PostgreSQL, psycopg2 django-webpacker-loader 0.4.1

Download PostgreSQL for Mac: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads#macosx

## Test app
1. `git clone https://github.com/ucladevx/BruinMeet.git`

2. `cd BruinMeet`

3. `source bruin_meet_env/bin/activate`

4. `mv bruin_meet_project/settings_secret.py.template bruin_meet_project/settings_secret.py`

5. `mv bruin_meet_project/production.py.template bruin_meet_project/production.py`
       
6. Follow database commands in db_insns.txt after `sudo su - postgres` and `psql`

7. `python manage.py makemigrations`

8. `python manage.py migrate`

9. In a second terminal, `npm i` and `npm start`

10. In the original terminal, `python manage.py runserver 0.0.0.0:8000`

Now go to "localhost:8080" in your browser
