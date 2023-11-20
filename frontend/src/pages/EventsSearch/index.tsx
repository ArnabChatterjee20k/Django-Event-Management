import SearchForm from "./components/SearchForm";
import EventSearchContextProvider from "./context/EventSearchContextProvider";
import {Outlet} from "react-router-dom"
export default function Index() {
  return (
    <section>
        <EventSearchContextProvider>
            <SearchForm />
            <Outlet/>
        </EventSearchContextProvider>
    </section>
  );
}
