# Getting Started
### Running with docker

- Add environment variables in the backend → `backend/event_management/.env`
    
    ```jsx
    TICKETMASTER_API_URL =
    TICKETMASTER_API_KEY =
    
    X-RapidAPI-Key =
    X-RapidAPI-Host =
    GEOCODE_URL =
    
    DB_URL =
    PAGES=2
    ```
    
- Add environment variables in the frontend → `frontend/src/config.ts`
    
    ```jsx
    export default {
        API_HOST : "http://127.0.0.1:8000/",
        EVENT_ENDPOINT:"events/",
        SUGGESTION_ENDPOINT : "events/help/suggestions/",
        EVENT_ENDPOINT_AUTO_SEARCH_PARAM:{param:"auto",val:"true"},
        EVENT_ENDPOINT_WITHOUT_AUTO_SEARCH_PARAM:{param:"auto",val:"false"},
        IP_INFO_URL:"https://ipinfo.io/json?token=yourtoken",
        LOCAL_STORAGE_FAVORITE_KEY : "favorites" ,
    }
    ```
    
- Running the container
    
    ```jsx
    docker-compose -f docker-composer.yml up
    ```
    

### Without Docker

- Insitall dependencies for backend
- Install the dependencies for frontend
- Run the command
    
    ```jsx
    docker-compose -f docker-compose.yml up
    ```