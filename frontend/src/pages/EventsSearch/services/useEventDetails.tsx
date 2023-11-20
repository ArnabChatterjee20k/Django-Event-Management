import { useQuery } from "@tanstack/react-query";
import queryEventDetails from "../utils/queryEventDetails";

export default function useEventDetails(id:string){
    return useQuery({
        queryKey:[`event-details-${id}`],
        queryFn:()=>queryEventDetails(id),
        staleTime:Infinity
    })
}