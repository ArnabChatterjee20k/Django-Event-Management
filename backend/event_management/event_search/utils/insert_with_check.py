from pymongo.collection import Collection
def insert_with_check(collection:Collection,documents):
        for document in documents:
            filter_criteria = {'id': document['id']}
            update_data = {'$set': document}
            collection.update_one(filter_criteria,update_data,upsert=True)