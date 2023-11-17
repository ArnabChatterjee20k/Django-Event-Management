import { createContext, useContext, useState, ChangeEvent } from "react";
import DEFAULT_SEARCH_SETTINGS from "../data/SearchSettings";
import SettingsContextType from "../types/SettingsContextType";
import SettingsType from "../types/SettingsType";

const EventSearchContext = createContext<SettingsContextType>({
  searchSettings: DEFAULT_SEARCH_SETTINGS,
});
export const useEventSearchContext = () => useContext(EventSearchContext);

export default function EventSearchContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchSettings, setSearchSettings] = useState(DEFAULT_SEARCH_SETTINGS);

  function updateSettings(
    e: ChangeEvent<HTMLInputElement> | string,
    name?: string
  ) {
    if (typeof e === "object") {
      const target = e.target.name;
      setSearchSettings((prevSettings) => {
        const updatedValue = (e as ChangeEvent<HTMLInputElement>).target.value;
        return { ...prevSettings, [target]: updatedValue };
      });
    } else {
      if (name)
        setSearchSettings((prevSettings) => {
          return { ...prevSettings, [name]: e };
        });
    }
  }

  function resetSettingsToDefault() {
    setSearchSettings(DEFAULT_SEARCH_SETTINGS);
  }

  return (
    <EventSearchContext.Provider
      value={{ searchSettings, updateSettings, resetSettingsToDefault }}
    >
      {children}
    </EventSearchContext.Provider>
  );
}
