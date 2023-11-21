import useEventDetails from "../../services/useEventDetails";
import { useParams } from "react-router-dom";
import {
  EventLinkField,
  EventTextField,
  EventSaleField,
  Link,
  Headline,
} from "./EventField";
import EventShare from "./EventShare";

export default function EventTabContent() {
  const { id } = useParams();
  const { data } = useEventDetails(id as string);
  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="flex items-center w-full">
        <div className="flex flex-col items-center w-full gap-5">
          <EventTextField
            headline="Date"
            text={`${data?.date_time.localDate} ${data?.date_time.localTime}`}
          />
          <Artist_team />
          <EventTextField headline="Venue" text={data?.venue.name as string} />
          <EventTextField headline="Genres" text={data?.genre as string} />
          <EventTextField
            headline="Date"
            text={`${data?.price_ranges.min} - ${data?.price_ranges.max} USD`}
          />
          <EventSaleField
            headline="Ticket Status"
            ticketstatus={data?.ticket_status}
          />
          <EventLinkField
            headline="Buy Ticket At"
            text="Ticketmaster"
            href={data?.ticket_link}
          />
        </div>
        <div className="1000px">
          <img
            className="w-max-[1000px]"
            src={data?.seat_map}
            alt={data?.name}
          />
        </div>
      </div>
      <EventShare />
    </div>
  );
}

const Artist_team = () => {
  const { id } = useParams();
  const { data } = useEventDetails(id as string);

  if (!data?.artists_team || data?.artists_team.length === 0) return null;

  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <Headline headline="Artist/Team" />
      <div className="flex gap-1 flex-wrap items-center">
        {data?.artists_team.map((artist, index, team) => (
          <>
            <Link href={artist.url} text={artist.name} />
            {index !== team.length - 1 && (
              <span className="text-cyan-400">|</span>
            )}
          </>
        ))}
      </div>
    </div>
  );
};
