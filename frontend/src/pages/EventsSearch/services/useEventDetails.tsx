import { useQuery } from "@tanstack/react-query";
import queryEventDetails from "../utils/queryEventDetails";
import EventDetails from "../types/EventDetails";

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