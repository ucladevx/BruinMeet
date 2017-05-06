import psycopg2
import production

conn_str = production.conn_str
sql_mu = production.sql_mu
sql_mu_in = production.sql_mu_in

def insert_user(email, password):
    print "\nInserting", email, "with", password, ".... (insert_user)"
    if not utils.is_valid_email(email):
        print "Unable to create user", email, "(insert_user)"
        return False    
    conn = None
    success = True
    user_id = utils.create_user_id(email, password)
    if not user_id:
        print "Unable to create user id (insert_user)"
        return False
    try:
        conn = psycopg2.connect(conn_str)
        cur = conn.cursor()
        cur.execute(sql_mu_in, (email, password, user_id))
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
    return True

def is_valid_email(email):
    print "Validating", email, "... (utils)"
    EMAIL_RE = re.compile("(^[a-zA-Z0-9_.+-]+@ucla.edu$)")
    G_EMAIL_RE = re.compile("(^[a-zA-Z0-9_.+-]+@g.ucla.edu$)")
    if not (EMAIL_RE.match(email) or G_EMAIL_RE.match(email)):
        print "Invalid email (utils)"
        return False
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
            return False
    print "Valid untaken email (utils)"
    return True

def is_valid_login(email, password):
    print "Validating", email, "with", password, "... (utils)"
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
            if row[1].rstrip() == password:
                print "Valid Login (utils)"
                return True
            else:
                print "Invalid Login (utils)"
                return False
    print "Invalid Login (utils)"
    return False

def create_user_id(email, password):
    return 123