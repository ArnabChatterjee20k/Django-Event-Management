import SettingsType from "./SettingsType";
import {ChangeEvent} from "react"
export default interface SettingsContextType{
    searchSettings:SettingsType,
    updateSettings?:(e:ChangeEvent<HTMLInputElement>|string,name?:string)=>void,
    resetSettingsToDefault?:()=>void
}