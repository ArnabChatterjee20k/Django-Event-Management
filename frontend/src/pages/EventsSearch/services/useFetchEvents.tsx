import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryEvent from "../utils/queryEvent";
import { SettingsWithAutoSearch } from "../types/SettingsType";
import Coordinates from "../types/Coordinates";

export default function useFetchEvents() {
  const queryClient = useQueryClient();

  const { mutate, data, isSuccess, isError, isPending, error } = useMutation({
    mutationFn: (args: {
      body: SettingsWithAutoSearch;
      locationCoordinates?: Coordinates;
    }) => queryEvent(args.body, args.locationCoordinates),
  });

  function queryEvents(
    body: SettingsWithAutoSearch,
    locationCoordinates?: Coordinates
  ) {
    return mutate(
      { body, locationCoordinates },
      {
        onSuccess: (data) => {
          queryClient.setQueryData(["current-searched-event"], data);
          alert("Events Fetched");
        },
        onError: () => {
          alert("Error while fetching the event");
        },
      }
    );
  }

  return { queryEvents, data, isSuccess, isError, isPending, error };
}
