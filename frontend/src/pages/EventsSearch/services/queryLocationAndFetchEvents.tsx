import { useMutation,useQueryClient } from "@tanstack/react-query";
import fetchCurrentLocationDetails from "../../../utils/fetchCurrentLocationDetails";
import type { SettingsWithAutoSearch } from "../types/SettingsType";
import queryEvents from "../utils/queryEvent";

export default function queryLocationAndFetchEvents() {
  const queryClient = useQueryClient()
  const { mutateAsync } = useMutation({
    mutationFn: () => fetchCurrentLocationDetails(),
  });
  function getCurrentLocationDetails(
    searchQueryParams: SettingsWithAutoSearch
  ) {
    return mutateAsync(undefined, {
      onSuccess: async(data) => {
        alert("Location Fetched");
        const { loc } = data;
        const [lat, long] = loc.split(",");
        const events = await queryEvents(searchQueryParams, {
          lat: parseFloat(lat),
          long: parseFloat(long),
        });
        queryClient.setQueryData(["current-searched-event"], events);

      },
      onError: () => {
        alert("Error while fetching the details");
      },
    });
  }
  return { getCurrentLocationDetails };
}
