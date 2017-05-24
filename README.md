# BruinMeet
A unified, interactive platform for UCLA students to search and create social groups.

Forward all comments/suggestions/bugs to bruinmeet.devx@gmail.com

## Dependencies
Python 2.7, Django, PostgreSQL, psycopg2 django-webpacker-loader 0.4.1

Download PostgreSQL for Mac: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads#macosx

## Test app (for local hosting ONLY)
1. `git clone https://github.com/ucladevx/BruinMeet.git`

2. `cd BruinMeet`

3. `source bruin_meet_env/bin/activate`

4. `mv bruin_meet_project/settings_secret.py.template bruin_meet_project/settings_secret.py`

5. `mv bruin_meet_project/production.py.template bruin_meet_project/production.py`
       
6. Follow database commands in db_insns.md after `sudo su - postgres` and `psql`

7. `python manage.py makemigrations`

8. `python manage.py migrate`

9. In a second terminal, `npm start`

10. In the original terminal, `python manage.py runserver 0.0.0.0:8080`

Now go to "localhost:8080" in your browser


## Test app (on ec2 server)
Assuming you have done steps 1-5

6. Run `sudo su postgres` and `cd ~postgres/`

7. Run `psql --host=bmdb.c6oxazuezpo9.us-west-1.rds.amazonaws.com --port=5432 --username=bruinmeet --password --dbname=bruin_meet`

8. All the schemas in the database=postgres should have been created already. Modify accordingly.

9. Follow steps 7-10 to run on the server at port 8080.
