import { Routes, Route } from "react-router-dom";
import EventsSearch from "../src/pages/EventsSearch";
import EventTable from "./pages/EventsSearch/components/EventTable";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<EventsSearch />}>
        <Route path="" element={<EventTable />} />
        <Route path="/:id" element={<h1 className="bg-white">Hellow</h1>} />
      </Route>
    </Routes>
  );
}
