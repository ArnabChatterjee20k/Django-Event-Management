import * as Form from "@radix-ui/react-form";
import Input from "../../../components/Input";
import Category from "./Category";
import AutoLocationCheckBox from "./AutoLocationCheckBox";
import Button from "../../../components/Button/Button";
import { useEventSearchContext } from "../context/EventSearchContextProvider";

export default function SearchForm() {
  const { searchSettings, updateSettings, resetSettingsToDefault } =
    useEventSearchContext();
  return (
    <div className="py-8">
      <Form.Root className="w-[600px] mx-auto  bg-slate-900 px-12 py-12 rounded-lg">
        <h1 className="text-white text-4xl text-center">Events Search</h1>
        <hr className="my-4" />
        <Input
          value={searchSettings.keyword}
          name="keyword"
          onChange={updateSettings}
          label="keyword"
          type="text"
          message="Please enter the keyword"
        />
        <div className="flex items-center gap-7">
          <Input
            value={searchSettings.distance}
            name="distance"
            label="Distance(miles)"
            type="number"
            onChange={updateSettings}
            message="Please enter the distance"
          />
          <Category />
        </div>
        <Input
          onChange={updateSettings}
          name="location"
          value={searchSettings.location}
          label="Location"
          type="text"
          message="Please enter the location"
        />
        <AutoLocationCheckBox />
        <div className="flex gap-6 w-full justify-center mt-6">
          <Form.Submit>
            <Button className="bg-red-500">SUBMIT</Button>
          </Form.Submit>
          <Button onClick={resetSettingsToDefault} className="bg-blue-500">CLEAR</Button>
        </div>
      </Form.Root>
    </div>
  );
}
