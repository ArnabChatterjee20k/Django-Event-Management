import DataTable, { TableColumn } from "react-data-table-component";
import EventSearchResponse from "../types/EventSearchResponse";
import EventTableText from "./EventTableText";
import EventTableImage from "./EventTableImage";
import EventTableDate from "./EventTableDate";

const columns: TableColumn<EventSearchResponse>[] = [
  {
    name: "DateTime",
    selector: (row) => row.date_time,
    cell: (row) => <EventTableDate date={row.date_time} />,
  },
  {
    name: "Icon",
    selector: (row) => row.icon,
    cell: (row) => <EventTableImage src={row.icon} alt={row.event} />,
  },
  {
    name: "Event",
    selector: (row) => row.event,
    cell: (row) => <EventTableText text={row.event} />,
    sortable:true
  },
  {
    name: "Genre",
    selector: (row) => row.genre,
    cell: (row) => <EventTableText text={row.genre} />,
    sortable:true
  },
  {
    name: "Venue",
    selector: (row) => row.venue,
    cell: (row) => <EventTableText text={row.venue} />,
    sortable:true
  },
];
const data = [
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

interface Props {
  data: EventSearchResponse[];
}

export default function EventTable({ data }: Props) {
  return (
    <DataTable
      columns={columns}
      data={data}
      striped // for odd rows
      customStyles={{
        table: {
          style: { width: "880px", marginInline: "auto", marginTop: "4rem" },
        },
        rows: {
          style: {
            backgroundColor: "#111827",
            color: "white",
            paddingBlock: "20px",
          },
          stripedStyle: { backgroundColor: "#1f2937", color: "white" },
        },
        headRow: {
          style: {
            backgroundColor: "#111827",
            color: "white",
            ":first-child": {
              fontSize: "1rem",
              marginInline: "auto",
            },
          },
        },
      }}
    />
  );
}
