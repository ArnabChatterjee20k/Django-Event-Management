import { useQuery } from "@tanstack/react-query";
import { Suggestions } from "../types/Suggestions";
import getSuggestions from "../utils/getSuggestions";

export default function useSuggestions() {
  return useQuery<Suggestions>({
    queryKey: ["suggestions"],
    queryFn: getSuggestions,
    staleTime: Infinity,
    refetchOnMount: false,
  });
}
