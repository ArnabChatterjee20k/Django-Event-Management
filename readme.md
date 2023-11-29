### Working

For setting it up please read GettingStarted

---

<aside>
👉 After some research work, I found out the event data in the ticketmaster database is mostly static for a long period

</aside>

### Fetching Data and the issue

- The simplest and easiest way will be making request to the backend , backend will fetch and serialise the data and return it to the frontend
- But here is a catch.
    - According to the specificty of the application, we cant stop the users from searching the events
    - So very quickly we will be running out of api limits
    - Also latency would be another challenge
- If data is static for a longer duration why to fetch it again and again??

### Solution

- The best possible way here is upserting a cache in large number
- Here I am using mongo db cause the data is not following any schema and they are objects. So mongodb is the definite choice according to me
    
    ### For event details
    
    - Since the data is static we can fetch results once in a month and update our own db
    - A cron job has been setupped to fetch data in large number and upsert the db by checking the event ids.
    - Fetch the data if present in the db else fetch it from ticketmaster.
    
    ### Why this approach is not applied for event querying?
    
    While event query, location and radius are coming. And ticketmaster don’t provide us a strict model of locations it supports. So calculation on the runtime using another large coordinates dataset will be tedious.
    
    ### For Suggestions
    
    - Same approach for suggestions
    - Since getting suggestion while typing will make a lot of api calls to the proxy as well as the ticketmaster api.
    - Store all the suggestions in the db. Fetch it around once or twice in a week. While inserting suggestions in the db , remove all the previous suggestions and add new one
    - Send the stored suggestion to the frontend. Aplplying query in the frontend itself.

### Running crons

<aside>
👉 For adding cron in the docker image,modify the dockerfile of the backend

</aside>

```jsx
python event_management/manage.py crontab add
```

We can also go for github actions as well.