import DataTable, { TableColumn } from "react-data-table-component";
import EventSearchResponse from "../types/EventSearchResponse";
import EventTableText from "./EventTableText";
import EventTableImage from "./EventTableImage";
import EventTableDate from "./EventTableDate";
import useCurrentSearchedEvent from "../services/useCurrentSearchedEvent";
import { useNavigate } from "react-router-dom";

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
    sortable: true,
  },
  {
    name: "Genre",
    selector: (row) => row.genre,
    cell: (row) => <EventTableText text={row.genre} />,
    sortable: true,
  },
  {
    name: "Venue",
    selector: (row) => row.venue,
    cell: (row) => <EventTableText text={row.venue} />,
    sortable: true,
  },
];


export default function EventTable() {
  const { data } = useCurrentSearchedEvent();
  const nav = useNavigate();
  if(!data || data?.length===0) return null

  function navigateToEventDetails(id: string) {
    nav(`${id}`);
  }
  return (
    <DataTable
      columns={columns}
      data={data as EventSearchResponse[]}
      striped // for odd rows
      onRowClicked={(row) => {navigateToEventDetails(row.id)}}
      customStyles={{
        table: {
          style: { width: "880px", marginInline: "auto", marginBlock: "4rem" },
        },
        rows: {
          style: {
            backgroundColor: "#111827",
            color: "white",
            paddingBlock: "20px",
          },
          stripedStyle: { backgroundColor: "#1f2937", color: "white" },
        },
        cells: { style: { cursor: "pointer" } },
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
