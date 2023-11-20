from glom import glom
def getter(target,query):
    return glom(target,query,default="")