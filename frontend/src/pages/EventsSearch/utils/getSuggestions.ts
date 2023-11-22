import config from "../../../config";
import responseHandler from "../../../utils/responseHandler";
import { Suggestions } from "../types/Suggestions"
export default async function getSuggestions() {
  const { API_HOST, SUGGESTION_ENDPOINT } = config;
  const url = `${API_HOST}${SUGGESTION_ENDPOINT}`;
  const res = await fetch(url);
  return responseHandler<Suggestions>(res);
}
