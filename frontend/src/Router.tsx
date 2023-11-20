import { Routes, Route, Navigate } from "react-router-dom";
import EventsSearch from "../src/pages/EventsSearch";
import EventTable from "./pages/EventsSearch/components/EventTable";
import EventDetails from "./pages/EventsSearch/components/EventDetails";
import EventTabContent from "./pages/EventsSearch/components/EventDetails/EventTabContent";
import VenueTabContent from "./pages/EventsSearch/components/EventDetails/VenueTabContent";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<EventsSearch />}>
        <Route path="" element={<EventTable />} />
        <Route path="/:id" element={<EventDetails />}>
          <Route path="" element={<Navigate to="event" />} />
          <Route path="event" element={<EventTabContent />} />
          <Route path="venue" element={<VenueTabContent />} />
        </Route>
      </Route>
    </Routes>
  );
}
