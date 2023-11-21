from glom import glom
def getter(target,query,default=""):
    return glom(target,query,default=default)