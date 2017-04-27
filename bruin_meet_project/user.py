import psycopg2
import utils, production

conn_str = production.conn_str
sql_mu_in = production.sql_mu_in

def insert_user(email, password):
    print "\nInserting", email, "with", password, ".... (insert_user)"
    if not utils.is_valid_email(email):
        print "Unable to create user", email, "(insert_user)"
        return False
    
    conn = None
    success = True
    
    try:
        conn = psycopg2.connect(conn_str)
        cur = conn.cursor()
        cur.execute(sql, (email, password))
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
