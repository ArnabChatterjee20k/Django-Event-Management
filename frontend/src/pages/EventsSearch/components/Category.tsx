import * as Select from "@radix-ui/react-select";
import { CategoryData } from "../data/CategoryData";
import DropdownIcon from "../../../icons/DropdownIcon";
import { useEventSearchContext } from "../context/EventSearchContextProvider";

export default function Category() {
  const { searchSettings, updateSettings } = useEventSearchContext();
  function changeCategory(value: string) {
    if (updateSettings) updateSettings(value, "category");
  }

  return (
    <Select.Root value={searchSettings.category} onValueChange={changeCategory}>
      <Select.Trigger className="mt-6 text-sm w-full inline-flex items-center justify-between rounded px-3 leading-none h-9 bg-white text-gray-800 border border-gray-300 focus:outline-none focus:border-blue-500">
        <Select.Value>{searchSettings.category}</Select.Value>
        <DropdownIcon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.Viewport className="py-2">
            {CategoryData.map((category) => (
              <SelectItem value={category} />
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default"></Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

const SelectItem = ({ value }: { value: string }) => {
  return (
    <Select.Item
      value={value}
      className="my-1 px-6 cursor-pointer hover:bg-slate-400 outline-transparent"
    >
      <Select.ItemText>{value}</Select.ItemText>
    </Select.Item>
  );
};
