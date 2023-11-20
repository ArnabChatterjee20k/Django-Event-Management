import config from "../../../config";
import responseHandler from "../../../utils/responseHandler";
import  EventDetails from "../types/EventDetails";
export default async function queryEventDetails(id: string) {
  const { API_HOST, EVENT_ENDPOINT } = config;
  const url = API_HOST + EVENT_ENDPOINT + id + "/";
  const res = await fetch(url);
  return responseHandler<EventDetails>(res);
}