import { BrowserRouter } from "react-router-dom";
import EventsSearch from "../src/pages/EventsSearch";
import BackgroundImage from "./assets/background.jpg";
import Router from "./Router";

const sectionStyle = {
  backgroundImage: `url(${BackgroundImage})`,
};
export default function App() {
  return (
    <main style={sectionStyle} className="bg-cover min-h-screen">
      <BrowserRouter >
        <Router/>
      </BrowserRouter>
    </main>
  );
}
