import psycopg2
import production, utils

conn_str = production.conn_str
sql_mm = production.sql_mm
sql_mm_in = production.sql_mm_in

def is_valid_meetup_info(info):
    return True

def insert_meetup(title, description, t_time, location, maxim_cap, people, user_id):
    print "\nCreating meetup", title
    print "description:\t", description
    print "time:\t\t", t_time
    print "location:\t", location
    print "maximum cap:\t", maxim_cap

    hash_seed = str(title) + str(description) + str(t_time) + str(location) + str(maxim_cap) + str(user_id)
    meetup_id = utils.create_hash(hash_seed)
    info = [meetup_id, title, description, t_time, location, maxim_cap]

    if not is_valid_meetup_info(info):
        print "Invalid meetup info", title, "(insert_meetup)"
        return False
    
    conn = None
    success = True
    
    try:
        conn = psycopg2.connect(conn_str)
        cur = conn.cursor()
        people = 1
        cur.execute(sql_mm_in, (meetup_id, title, description, t_time, location, maxim_cap, people, user_id))
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

def edit_meetup(meetup_id, new_meetup_id, old_title, new_title, description, t_time, location, maxim_cap, people, user_id, num_stars):
    print "\nEditing meetup", old_title, "to", new_title

    info = [new_meetup_id, new_title, description, t_time, location, maxim_cap, people, user_id, num_stars]

    if not is_valid_meetup_info(info):
        print "Invalid meetup info for:", old_title, "(edit_meetup)"
        return False

    conn = None
    success = True
    
    try:
        conn = psycopg2.connect(conn_str)
        cur = conn.cursor()
        cur.execute('update main.meetups set id=\'%s\', title=\'%s\', description=\'%s\', t_time=\'%s\', location=\'%s\', maxim_cap=\'%s\', people=\'%s\', num_stars=\'%s\' where id=\'%s\';' % (new_meetup_id, new_title, description, t_time, location, maxim_cap, people, num_stars, meetup_id))
        conn.commit()
        cur.close()
    except psycopg2.DatabaseError as error:
        print(error)
        return False
    finally:
        if conn is not None:
            conn.close()
    print "Successfully edited meetup"
    return True

def delete_meetup(meetup_id):
    conn = None
    try:
        conn = psycopg2.connect(conn_str)
        cur = conn.cursor()
        cur.execute('delete from main.meetups where id=\'' + str(meetup_id) + '\';')
        conn.commit()
        cur.close()
    except psycopg2.DatabaseError as error:
        print(error)
        print "Error while deleting meetup..."
        return False
    finally:
        if conn is not None:
            conn.close()
    return True


def get_meetups(sql_command):
    conn = None
    try:
        conn = psycopg2.connect(conn_str)
        cur = conn.cursor()
        cur.execute(sql_command)
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
    
def get_all_meetups():
    print "\nGetting all meetups..."
    return get_meetups(sql_mm)

def get_user_meetups(user_id):
    print "\nGetting all user meetups..."    
    return get_meetups('select * from main.meetups where user_id = \'' + str(user_id) + '\';')

def get_nonuser_meetups(user_id):
    print "\nGetting all nonuser meetups..."
    return get_meetups('select * from main.meetups where user_id!=' + str(user_id) + ';')

