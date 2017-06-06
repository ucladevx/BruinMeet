import psycopg2
import production, utils

conn_str = production.conn_str
sql_mm = production.sql_mm
sql_mm_in = production.sql_mm_in

def is_valid_meetup_info(info):
    return True

def insert_meetup(title, description, t_time, location, maxim_cap, people, user_id, type_event):
    print "\nCreating meetup", title
    print "description:\t", description
    print "time:\t\t", t_time
    print "location:\t", location
    print "maximum cap:\t", maxim_cap
    print "type:\t", type_event
    
    hash_seed = str(title) + str(description) + str(t_time) + str(location) + str(maxim_cap) + str(user_id) + str(type_event)
    meetup_id = utils.create_hash(hash_seed)
    info = [meetup_id, title, description, t_time, location, maxim_cap, type_event]

    if not is_valid_meetup_info(info):
        print "Invalid meetup info", title, "(insert_meetup)"
        return False

    conn = None
    success = True

    try:
        conn = psycopg2.connect(conn_str)
        cur = conn.cursor()
        people = 1
        cur.execute(sql_mm_in % (meetup_id, title, description, t_time, location, maxim_cap, people, user_id, user_id, type_event))
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

def add_person_to_meetup(meetup_id, new_user_id):
    conn = None
    try:
        conn = psycopg2.connect(conn_str)
        cur = conn.cursor()
        cur.execute("select * from main.meetups where id=\'%s\'" % str(new_user_id))
        rows = cur.fetchall()
        db_user_id = rows[0][2]
        if not rows:
            print "Could not find user with id:", new_user_id 
            return False
        cur.execute("select * from main.meetups where id=\'%s\'" % str(meetup_id))
        rows = cur.fetchall()
        if not rows:
            print "Could not find meetup with id:", meetup_id
            return False
        people = rows[0][7]
        user_ids = rows[0][9]
        if db_user_id in user_ids:
            print "User id:", new_user_id, "already going to meetup id:", meetup_id
            return False
        cur.execute('update main.meetups set people=\'%s\', user_ids=\'%s\' where id=\'%s\';' % (int(people) + 1, str(user_ids) + "|" + str(new_user_id), meetup_id))
        conn.commit()
        cur.close()
    except psycopg2.DatabaseError as error:
        print(error)
        return False
    finally:
        if conn is not None:
            conn.close()
    return meetup_id

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
    return get_meetups('select * from main.meetups where user_id != \'' + str(user_id) + '\';')

def get_userID_from_meetupID(meetup_id):
    conn = None
    try:
        conn = psycopg2.connect(conn_str)
        cur = conn.cursor()
        cur.execute("select * from main.meetups where id=\'%s\'" % meetup_id)
        rows = cur.fetchall()
        if not rows:
            return False
        user_id = rows[0][7]
        cur.close()
    except psycopg2.DatabaseError as error:
        print(error)
        print "Error while getting user id from meetup_id..."
        return False
    finally:
        if conn is not None:
            conn.close()
    return user_id
