import hmac
import production

def create_hash(value):
    return hmac.new(production.id_key, str(value)).hexdigest()

def make_cookie(value):
    return "%s|%s" % (value, hash_str(value))

def check_cookie(hash_value):
    val = hash_value.split('|')[0]
    if hash_value == make_cookie(hash_value):
        return val
