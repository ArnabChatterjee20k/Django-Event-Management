from cron.store_events import store_events
from cron.store_suggestion import store_suggestion

def run():
    try:
        store_events()
        store_suggestion()
    except Exception as e:
        print(e)