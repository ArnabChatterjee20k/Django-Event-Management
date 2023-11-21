import config from "../config";
import responseHandler from "./responseHandler";
import type CurrentLocationDetails from "../types/CurrentLocationDetails";
export default async function fetchCurrentLocationDetails(){
    const {IP_INFO_URL} = config
    const res = await fetch(IP_INFO_URL)
    return responseHandler<CurrentLocationDetails>(res)
}