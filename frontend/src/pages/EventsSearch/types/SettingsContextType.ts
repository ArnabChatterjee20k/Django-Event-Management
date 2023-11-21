import type { SettingsWithAutoSearch } from "./SettingsType";
import {ChangeEvent} from "react"
export default interface SettingsContextType{
    searchSettings:SettingsWithAutoSearch,
    updateSettings?:(e:ChangeEvent<HTMLInputElement>|string,name?:string)=>void,
    resetSettingsToDefault?:()=>void
}