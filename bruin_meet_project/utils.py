import hmac
import production

def create_hash(value):
    return hmac.new(production.id_key, str(value)).hexdigest()

def make_cookie(value):
    return "%s|%s" % (value, create_hash(value))

def check_cookie(hash_value):
    val = hash_value.split('|')[0]
    if hash_value == make_cookie(val):
        return val

    
def create_pass_hash(value):
    return hmac.new(production.pass_salt, str(value)).hexdigest()

def check_password(hash_value, password):
    return hash_value == create_pass_hash(password)

