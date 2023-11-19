import requests
def fetcher(url,error_message="Error while fetching ",**kwargs):
    res = requests.get(url,**kwargs)
    if res.status_code != 200:
        raise Exception(error_message)
    return res.json()