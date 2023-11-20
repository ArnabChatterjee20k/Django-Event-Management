def joinStringBySep(sep="|",escape=("","Undefined",None),strs=()):
    print(strs)
    res = ""
    for str in strs:
        if str not in escape:
            res+=str+" | "

    return res[:-4]