import BackgroundImage from "../../assets/background.jpg";
import SearchForm from "./components/SearchForm";
import EventSearchContextProvider from "./context/EventSearchContextProvider";

export default function Index() {
  const sectionStyle = {
    backgroundImage: `url(${BackgroundImage})`,
  };

  return (
    <section className="min-h-screen bg-cover" style={sectionStyle}>
        <EventSearchContextProvider>
            <SearchForm />
        </EventSearchContextProvider>
    </section>
  );
}
