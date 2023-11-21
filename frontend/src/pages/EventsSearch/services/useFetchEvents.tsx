import { useMutation,useQueryClient } from "@tanstack/react-query";
import queryEvent from "../utils/queryEvent";
import { SettingsWithAutoSearch } from "../types/SettingsType";

export default function useFetchEvents() {
  const queryClient = useQueryClient()
  const {mutate,data,isSuccess,isError,isPending,error} = useMutation({
    mutationFn: (body: SettingsWithAutoSearch) => queryEvent(body),
  });

  function queryEvents(body: SettingsWithAutoSearch){
    return mutate(body,{
      onSuccess:(data)=>{
        queryClient.setQueryData(["current-searched-event"],data)
      }
    });
  };

  return {queryEvents,data,isSuccess,isError,isPending,error}
}