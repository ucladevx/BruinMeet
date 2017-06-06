import psycopg2, re
import production, utils

conn_str = production.conn_str
sql_mu = production.sql_mu
sql_mu_in = production.sql_mu_in
pass_salt = production.pass_salt

def insert_user(email, password):
    print "\nInserting", email, "with", password, ".... (insert_user)"
    if not is_valid_email(email):
        print "Unable to create user", email, "(insert_user)"
        return False
    conn = None
    success = True
    user_id = utils.create_hash(str(email)+str(password))
    if not user_id:
        print "Unable to create user id (insert_user)"
        return False
    try:
        conn = psycopg2.connect(conn_str)
        cur = conn.cursor()
        hash_pass = utils.create_pass_hash(password)
        cur.execute(sql_mu_in, (email, hash_pass, user_id))
        conn.commit()
        cur.close()
    except psycopg2.DatabaseError as error:
        print(error)
        print "Error while creating new user"
        return False
    finally:
        if conn is not None:
            conn.close()
    print "Successfully created user", email
    return user_id

def is_valid_email(email):
    print "Validating", email, "... (utils)"
    EMAIL_RE = re.compile("(^[a-zA-Z0-9_.+-]+@ucla.edu$)")
    G_EMAIL_RE = re.compile("(^[a-zA-Z0-9_.+-]+@g.ucla.edu$)")
    if not (EMAIL_RE.match(email) or G_EMAIL_RE.match(email)):
        print "Invalid email (utils)"
        return False
    return True

def is_email_already_used(email):
    print "Checking if", email, "is already used ... (utils)"
    conn = None
    rows = None
    try:
        conn = psycopg2.connect(conn_str)
        cur = conn.cursor()
        cur.execute(sql_mu)
        rows = cur.fetchall()
        cur.close()
    except psycopg2.DatabaseError as error:
        print(error)
        return False
    finally:
        if conn is not None:
            conn.close()
    for row in rows:
        if row[0].rstrip() == email:
            print "Invalid email - already taken (utils)"
            return True
    print "Valid untaken email (utils)"
    return False

def is_valid_login(email, password):
    print "Validating", email, "... (utils)"
    conn = None
    rows = None
    try:
        conn = psycopg2.connect(conn_str)
        cur = conn.cursor()
        cur.execute(sql_mu)
        rows = cur.fetchall()
        cur.close()
    except psycopg2.DatabaseError as error:
        print(error)
        return False
    finally:
        if conn is not None:
            conn.close()
    for row in rows:
        if row[0].rstrip() == email:
            if utils.check_password(row[1].rstrip(), password):
                print "Valid Login (utils)"
                return row[2].rstrip() # user_id
            else:
                print "Invalid Login (utils)"
                return False
    print "Invalid Login (utils)"
    return False

def get_user(user_id):
    print "\nGetting user:", user_id
    conn = None
    user = None
    try:
        conn = psycopg2.connect(conn_str)
        cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
        cur.execute('select * from main.users where id=\'' + user_id + '\';')
        user = cur.fetchone()
        cur.close()
    except psycopg2.DatabaseError as error:
        print(error)
        return False
    finally:
        if conn is not None:
            conn.close()

    if user:
        print user
        return user
    print "Error getting user_id: ", user_id
    return None
