import Coordinates from "./Coordinates";
export default interface SettingsType {
  keyword: string;
  distance: number;
  category: string;
  location: string | Coordinates;
}

export interface SettingsWithAutoSearch extends SettingsType {
  autoLocationEnabled: boolean;
}
