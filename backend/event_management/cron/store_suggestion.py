from event_search.utils.Suggestions import Suggestions
def store_suggestion():
    try:
        Suggestions().store_suggestions()
    except Exception as e:
        print(e)