import * as Form from "@radix-ui/react-form";
import Input from "../../../components/Input";
import Category from "./Category";
import AutoLocationCheckBox from "./AutoLocationCheckBox";
import Button from "../../../components/Button/Button";
import { useEventSearchContext } from "../context/EventSearchContextProvider";
import useFetchEvents from "../services/useFetchEvents";
import EventTable from "./EventTable";
import EventSearchResponse from "../types/EventSearchResponse";
import EmptyResultIndicator from "./EmptyResultIndicator";
import {Outlet,useLocation} from "react-router-dom"

const dummy = [
  {
    id: "G5vGZ9seQb3Ba",
    event:
      "2023-24 Hungry Jacks NBL Season - Illawarra Hawks v Tas JackJumpers",
    date_time: "2023-12-23T06:30:00Z",
    genre: "Basketball",
    venue: "WIN Entertainment Centre",
    icon: "https://s1.ticketm.net/dam/a/b1a/76093d42-4c4a-425e-98b6-1391fe893b1a_1495931_RETINA_PORTRAIT_16_9.jpg",
  },
  {
    id: "G5vGZ9seQb3Ba",
    event:
      "2023-24 Hungry Jacks NBL Season - Illawarra Hawks v Tas JackJumpers",
    date_time: "2023-12-23T06:30:00Z",
    genre: "Basketball",
    venue: "WIN Entertainment Centre",
    icon: "https://s1.ticketm.net/dam/a/b1a/76093d42-4c4a-425e-98b6-1391fe893b1a_1495931_RETINA_PORTRAIT_16_9.jpg",
  },
];

export default function SearchForm() {
  const { searchSettings, updateSettings, resetSettingsToDefault } =
    useEventSearchContext();
  const { queryEvents, data, isSuccess, isError, error } = useFetchEvents();
  isError && console.log(error);

  const {pathname} = useLocation()
  return (
    <div className="py-8">
      <Form.Root
        className="w-[600px] mx-auto backdrop-blur-sm bg-white/30 px-12 py-12 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          queryEvents(searchSettings);
        }}
      >
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
          <Button onClick={resetSettingsToDefault} className="bg-blue-500">
            CLEAR
          </Button>
        </div>
      </Form.Root>
      {isSuccess && data?.length === 0 && <EmptyResultIndicator />}
    </div>
  );
}
