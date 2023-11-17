export default function AutoLocationCheckBox() {
  return (
    <div className="flex gap-1 mt-2">
      <input type="checkbox" id="location" />
      <span className="text-white text-sm">Auto-Detect your location</span>
    </div>
  );
}
