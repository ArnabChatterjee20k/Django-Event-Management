import requests
from rest_framework.exceptions import ValidationError
def fetcher(url,error_message="Error while fetching ",**kwargs):
    res = requests.get(url,**kwargs)
    if res.status_code != 200:
        raise ValidationError({"status":error_message},code=400)
    return res.json()