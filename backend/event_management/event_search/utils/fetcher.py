import requests
from rest_framework.exceptions import ValidationError
def fetcher(url,error_message="Error while fetching ",**kwargs):
    try:
        res = requests.get(url,**kwargs)
        if res.status_code != 200:
            raise ValidationError({"status":error_message},code=res.status_code)
        return res.json()
    except requests.HTTPError as e:
        raise ValidationError({"status":e},code=res.status_code)