import useSuggestions from "../services/useSuggestions";
import { useEventSearchContext } from "../context/EventSearchContextProvider";
import Input from "../../../components/Input";
import Fuse from "fuse.js";
import { useState } from "react";
export default function SuggestionField() {
  const { data } = useSuggestions();
  const { searchSettings, updateSettings } = useEventSearchContext();
  const [show, setShow] = useState(false);
  const fuse = new Fuse(data || [], {
    keys: ["name"],
  });

  const results = fuse.search(searchSettings.keyword);

  return (
    <div
      className="relative"
      onFocus={() => setShow(true)}
      onBlur={() => setTimeout(() => setShow(false), 100)}
    >
      <Input
        value={searchSettings.keyword}
        name="keyword"
        onChange={updateSettings}
        label="keyword"
        type="text"
        message="Please enter the keyword"
      />
      {show && results.length ? (
        <ul className="flex flex-col py-2 bg-white absolute w-full rounded-sm shadow-lg">
          {results.map((res) => (
            <li
              className="px-2 py-1 list-none cursor-pointer hover:bg-gray-300"
              onClick={
                updateSettings
                  ? () => updateSettings(res.item.name, "keyword")
                  : undefined
              }
              key={res.item.name} // Don't forget to add a unique key to each list item
            >
              {res.item.name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
