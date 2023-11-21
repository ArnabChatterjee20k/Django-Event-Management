import config from "../../../config";
import responseHandler from "../../../utils/responseHandler";
import EventSearchResponse from "../types/EventSearchResponse";
import  { SettingsWithAutoSearch } from "../types/SettingsType";
import type Coordinates from "../types/Coordinates";
export default async (curentSearchQuery: SettingsWithAutoSearch,location?:Coordinates|null) => {
  const {
    API_HOST,
    EVENT_ENDPOINT,
    EVENT_ENDPOINT_AUTO_SEARCH_PARAM,
    EVENT_ENDPOINT_WITHOUT_AUTO_SEARCH_PARAM,
  } = config;
  const url = new URL(API_HOST);
  url.pathname = EVENT_ENDPOINT;
  if (curentSearchQuery.autoLocationEnabled)
    url.searchParams.set(
      EVENT_ENDPOINT_AUTO_SEARCH_PARAM.param,
      EVENT_ENDPOINT_AUTO_SEARCH_PARAM.val
    );
  else
    url.searchParams.set(
      EVENT_ENDPOINT_WITHOUT_AUTO_SEARCH_PARAM.param,
      EVENT_ENDPOINT_WITHOUT_AUTO_SEARCH_PARAM.val
    );
  const {autoLocationEnabled, ...body} = curentSearchQuery
  if(location) body.location = location
  const res = await fetch(url, {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return responseHandler<EventSearchResponse[]>(res);
};
