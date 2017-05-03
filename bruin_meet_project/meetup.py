import psycopg2
import production

conn_str = production.conn_str
sql_mm = production.sql_mm
sql_mm_in = production.sql_mm_in

def create_meetup_id(title):
    return 123

def is_valid_meetup_info(info):
    return True

def insert_meetup(title, description, t_time, location, maxim_cap, people):
    print "\nCreating meetup", title
    print "description:\t", description
    print "time:\t", time
    print "location:\t", location
    print "maximum cap:\t", maxim_cap

    meetup_id = create_meetup_id(title)
    info = [title, description, t_time, location, maxim_cap, 1]

    if not utils.is_valid_meetup_info(info):
        print "Unable to create meetup", title, "(insert_meetup)"
        return False
    
    conn = None
    success = True
    
    try:
        conn = psycopg2.connect(conn_str)
        cur = conn.cursor()
        meetup_id = 1234
        cur.execute(sql_mm_in, (meetup_id, title, description, t_time, location, maxim_cap, people))
        conn.commit()
        cur.close()
    except psycopg2.DatabaseError as error:
        print(error)
        return False
    finally:
        if conn is not None:
            conn.close()
    print "Successfully created meetup"
    return True

def get_all_meetups():
    print "\nGetting all meetups..."
    conn = None
    try:
        conn = psycopg2.connect(conn_str)
        cur = conn.cursor()
        cur.execute(sql_mm)
        rows = cur.fetchall()
        cur.close()
    except psycopg2.DatabaseError as error:
        print(error)
        print "Error while getting all meetups..."
        return False
    finally:
        if conn is not None:
            conn.close()

    meetups = []
    for row in rows:
        info = []
        for item in row:
            info.append(item)
        meetups.append(info)

    return meetups
