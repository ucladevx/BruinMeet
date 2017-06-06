Following PostgreSQL commands to be executed after: `sudo su - postgresl` and `psql`

1. `CREATE DATABASE bruinmeet_db;`

2. `CREATE USER bruinmeet_db_user WITH PASSWORD 'bruinmeet_db_user_pass';`

3. `GRANT ALL PRIVILEGES ON DATABASE bruinmeet_db TO bruinmeet_db_user;`

4. `\c bruinmeet_db`

5. `CREATE SCHEMA main;`

6. `CREATE TABLE main.users (email varchar(50) not null, password varchar(50) not null, id varchar(100) not null);`

7. `CREATE TABLE main.meetups (id varchar(100) not null, title varchar(50) not null, description varchar(300) not null, t_time timestamp without time zone not null, location varchar(50) not null, maxim_cap integer default 3, people integer default 1, user_id varchar(100) not null, num_stars integer default 0, user_ids text not null;`

8. To validate: `\d main.*`

9. `\q` and `exit`

10. Return to rest of instructions in README.md
