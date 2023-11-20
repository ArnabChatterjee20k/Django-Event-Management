import { useMutation,useQueryClient } from "@tanstack/react-query";
import queryEvent from "../utils/queryEvent";
import SettingsType from "../types/SettingsType";

export default function useFetchEvents() {
  const queryClient = useQueryClient()
  const {mutate,data,isSuccess,isError,isPending,error} = useMutation({
    mutationFn: (body: SettingsType) => queryEvent(body),
  });

  function queryEvents(body: SettingsType){
    return mutate(body,{
      onSuccess:(data)=>{
        queryClient.setQueryData(["current-searched-event"],data)
      }
    });
  };

  return {queryEvents,data,isSuccess,isError,isPending,error}
}