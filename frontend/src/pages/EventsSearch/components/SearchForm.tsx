import * as Form from "@radix-ui/react-form";
import Input from "../../../components/Input";
import Category from "./Category";
import AutoLocationCheckBox from "./AutoLocationCheckBox";
import Button from "../../../components/Button/Button";
import { useEventSearchContext } from "../context/EventSearchContextProvider";
import useFetchEvents from "../services/useFetchEvents";
import EmptyResultIndicator from "./EmptyResultIndicator";
import queryLocationAndFetchEvents from "../services/queryLocationAndFetchEvents";
import SuggestionField from "./SuggestionField";

export default function SearchForm() {
  const { searchSettings, updateSettings, resetSettingsToDefault } =
    useEventSearchContext();
  const { queryEvents, data, isSuccess, isPending } =
    useFetchEvents();

  const { getCurrentLocationDetails } = queryLocationAndFetchEvents();

  function handleSubmit() {
    if (searchSettings.autoLocationEnabled) {
      getCurrentLocationDetails(searchSettings);
      return;
    }
    queryEvents(searchSettings);
  }

  return (
    <div className="py-8">
      <Form.Root
        className="w-[600px] mx-auto backdrop-blur-sm bg-white/30 px-12 py-12 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          if (isPending) return;
          handleSubmit();
        }}
      >
        <h1 className="text-white text-4xl text-center">Events Search</h1>
        <hr className="my-4" />
        <SuggestionField/>
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
          disabled={searchSettings.autoLocationEnabled}
          name="location"
          value={searchSettings.location as string}
          label="Location"
          type="text"
          message="Please enter the location"
        />
        <AutoLocationCheckBox />
        <div className="flex gap-6 w-full justify-center mt-6">
          <Form.Submit>
            <Button className={`bg-red-500 ${isPending && "bg-red-300"}`}>
              {isPending ? "Loading.." : "SUBMIT"}
            </Button>
          </Form.Submit>
          <Button onClick={resetSettingsToDefault} className="bg-blue-500">
            CLEAR
          </Button>
        </div>
      </Form.Root>
      {isSuccess && data?.length === 0 && <EmptyResultIndicator />}
    </div>
  );
}
