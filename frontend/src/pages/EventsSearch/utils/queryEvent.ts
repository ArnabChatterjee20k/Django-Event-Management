import config from "../../../config";
import responseHandler from "../../../utils/responseHandler";
import SettingsType from "../types/SettingsType";
import EventSearchResponse from "../types/EventSearchResponse";
export default async (body: SettingsType) => {
  const { API_HOST, EVENT_ENDPOINT } = config;
  const url = API_HOST + EVENT_ENDPOINT;
  const res = await fetch(url, {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return responseHandler<EventSearchResponse>(res)
};
