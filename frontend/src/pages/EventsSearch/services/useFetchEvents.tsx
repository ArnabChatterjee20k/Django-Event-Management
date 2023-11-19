import { useMutation } from "@tanstack/react-query";
import queryEvent from "../utils/queryEvent";
import SettingsType from "../types/SettingsType";

export default function useFetchEvents() {
  const {mutate,data,isSuccess,isError,isPending} = useMutation({
    mutationFn: (body: SettingsType) => queryEvent(body),
  });

  function queryEvents(body: SettingsType){
    return mutate(body);
  };

  return {queryEvents,data,isSuccess,isError,isPending}
}