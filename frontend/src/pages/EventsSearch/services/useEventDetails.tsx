import { useQuery } from "@tanstack/react-query";
import queryEventDetails from "../utils/queryEventDetails";
import EventDetails from "../types/EventDetails";
const dummy = {
    "date_time": {
        "localDate": "2023-11-22",
        "localTime": "20:00:00"
    },
    "name": "Phoenix Suns vs. Golden State Warriors",
    "artists_team": "",
    "venue": {
        "name": "Footprint Center",
        "city": "Phoenix",
        "state": "Arizona",
        "address": "201 East Jefferson Street",
        "location": {
            "lat": "33.445899",
            "long": "-112.071313"
        }
    },
    "genre": "Sports | Basketball | NBA | Group | Tea",
    "price_ranges": {
        "max": 7000.0,
        "min": 114.0
    },
    "ticket_link": "https://www.ticketmaster.com/phoenix-suns-vs-golden-state-warriors-phoenix-arizona-11-22-2023/event/19005F0B52E20E52",
    "seat_map": "https://maps.ticketmaster.com/maps/geometry/3/event/19005F0B52E20E52/staticImage?type=png&systemId=HOST",
    "ticket_status": "onsale",
    "open_hours":  "The Footprint Center ticket office will be open at 3pm on weekday events and three (3) hours prior to event time for weekends. For any further questions or ticket inquiries, please reach out to feedback@suns.com or call the Footprint Center ticket office at (602) 379-7800.",
    "phone_number": "Northwest side of Footprint Center in the Pavilion.(602)379-7800 Suns Game Nights call (602)379-7867",
    "general_rule": "New security procedures have been implemented at Footprint Center. No backpacks or large purses will be allowed. Small purses and fanny packs will be subject to search. Every individual entering the arena will be subject to search. Every vehicle entering the building will be subject to search. Sealed water bottles (1 litre or smaller) allowed in building. No other outside concessions allowed. No pets other than \"assisting\" animals. Smoking in Facility: Footprint Center is a non-smoking facility. Smoking areas outside building are available, depending on event. NON professional cameras only (depending on event) No Laser Pointers allowed No Video Cameras allowed No Recorders allowed",
    "child_rule": "Please contact the Footprint Center ticket office at (602)379-7800, for information. Child policy Varies by event. Children age three (3) and above require a ticket for Phoenix Suns, Phoenix Mercury, and Arizona Rattlers games."
}
export default function useEventDetails(id:string){
    return useQuery<EventDetails>({
        queryKey:[`event-details-${id}`],
        queryFn:()=>queryEventDetails(id),
        // queryFn:()=>Promise.resolve(dummy),
        staleTime:Infinity,
        refetchOnMount:false,
        retry:false
    })
}