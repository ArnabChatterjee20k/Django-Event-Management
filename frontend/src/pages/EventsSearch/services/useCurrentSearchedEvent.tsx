import { useQuery } from "@tanstack/react-query";
import EventSearchResponse from "../types/EventSearchResponse";
export default function useCurrentSearchedEvent() {
  return useQuery<EventSearchResponse[]>({ queryKey: ["current-searched-event"] });
}
