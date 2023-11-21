import { useMutation } from "@tanstack/react-query";
import fetchCurrentLocationDetails from "../../../utils/fetchCurrentLocationDetails";
import type { SettingsWithAutoSearch } from "../types/SettingsType";
import queryEvents from "../utils/queryEvent";

export default function queryLocationAndFetchEvents() {
  const { mutateAsync } = useMutation({
    mutationFn: () => fetchCurrentLocationDetails(),
  });
  function getCurrentLocationDetails(
    searchQueryParams: SettingsWithAutoSearch
  ) {
    return mutateAsync(undefined, {
      onSuccess: (data) => {
        alert("Location Fetched");
        const { loc } = data;
        const [lat, long] = loc.split(",");
        queryEvents(searchQueryParams, {
          lat: parseFloat(lat),
          long: parseFloat(long),
        });
      },
      onError: () => {
        alert("Error while fetching the details");
      },
    });
  }
  return { getCurrentLocationDetails };
}
