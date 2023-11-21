import { useEventSearchContext } from "../context/EventSearchContextProvider";
export default function AutoLocationCheckBox() {
  const { searchSettings , updateSettings} = useEventSearchContext();
  const { autoLocationEnabled } = searchSettings;
  return (
    <div className="flex gap-1 mt-2">
      <input
        name="autoLocationEnabled"
        type="checkbox"
        id="location"
        checked={autoLocationEnabled}
        onChange={updateSettings}
      />
      <span className="text-white text-sm">Auto-Detect your location</span>
    </div>
  );
}
