# BruinMeet
A unified, interactive platform for UCLA students to search and create social groups

## Dependencies
Python 2.7, Django, PostgreSQL, psycopg2 django-webpacker-loader 0.4.1

## Test app
`cd BruinMeet`

`source bruin_meet_env/bin/activate` to enter python virtual env

`./node_modules/.bin/webpack --config webpack.config.js` if you modify the React code at assets/js/index.js

`mv bruin_meet_project/settings_secret.py.template bruin_meet_project/settings_secret.py`
Enter in your own secret key and username/password for Postgresql in bruin_meet_project/settings_secret.py

`sudo su - postgres`
`psql`

`CREATE DATABASE bruin_meet;`
`CREATE USER bruin_meet_user WITH PASSWORD 'bruin_meet_pass';`
`GRANT ALL PRIVILEGES ON DATABASE bruin_meet TO bruin_meet_user;`
`\q`
`exit`   

`echo "conn_str=\"dbname=\'db_name\' user=\'"bd_user\' password=\'db_user_pass\' host=\'localhost\'\"" > bruin_meet_project/production.py`

`echo "sql_mu_in=\'insert into schema_name.db_name (email, password) values (%s, %s);\'" >> bruin_meet_project/production.py`

`echo "sql_mu=\'select * from schema_name.db_name\'" >> bruin_meet_project/production.py

`python manage.py makemigrations`

`python manage.py migrate`

`python manage.py runserver` to start server, view at localhost:8080

`deactivate` to exit python virtual env

## Other
Forward all comments/bugs to bruinmeet.devx@gmail.com
