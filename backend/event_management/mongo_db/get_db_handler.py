from pymongo import MongoClient
from os import environ

def get_db_handler():
    client = MongoClient(environ.get("DB_URL"))
    db = client["events"]

    return client,db