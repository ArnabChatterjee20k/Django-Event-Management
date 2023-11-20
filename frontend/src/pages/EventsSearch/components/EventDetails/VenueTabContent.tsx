import React from "react";
import { useParams } from "react-router-dom";
import {
  EventLinkField,
  EventTextField,
  EventSaleField,
  EventCollapsable,
} from "./EventField";
import useEventDetails from "../../services/useEventDetails";
import MapModal from "./MapModal";

export default function VenueTabContent() {
  const { id } = useParams();
  const { data } = useEventDetails(id as string);
  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="flex w-full">
        <div className="flex flex-col items-center w-full gap-5">
          <EventTextField headline="Name" text={data?.venue.name as string} />
          <EventTextField
            headline="Address"
            text={`${data?.venue.address}, ${data?.venue.city}, ${data?.venue.state}`}
          />
          <EventTextField
            headline="Phone Number"
            text={data?.phone_number as string}
          />
        </div>

        <div className="flex flex-col items-start w-full gap-5">
          <EventCollapsable
            headline="Open Hours"
            text={data?.open_hours as string}
          />
          <EventCollapsable
            headline="General Rule"
            text={data?.general_rule as string}
          />
          <EventCollapsable
            headline="Child Rule"
            text={data?.child_rule as string}
          />
        </div>
      </div>
      <MapModal>
        <button className="font-medium text-xl px-4 py-2 bg-red-500 text-white rounded-lg mx-auto selce">Show venue on Google map</button>
      </MapModal>
    </div>
  );
}
