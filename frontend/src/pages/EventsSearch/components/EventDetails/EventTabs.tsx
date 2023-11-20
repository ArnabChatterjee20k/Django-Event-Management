import { Link, useLocation } from "react-router-dom";

export default function EventTabs() {
  const { pathname } = useLocation();
  const currentLocation = pathname.split("/")[2];

  return (
    <div className="flex w-full justify-center gap-4 bg-[#479485]">
      <Tab text="Event" link="event" active={currentLocation === "event"} />
      <Tab text="Venue" link="venue" active={currentLocation === "venue"} />
    </div>
  );
}

interface TabProps {
  text: string;
  link: string;
  active: boolean;
}

function Tab({ link, text, active }: TabProps) {
  return (
    <div className="flex flex-col items-center gap-3 mt-4 min-w-[6rem]">
      <Link to={link} className="font-semibold text-white text-2xl">
        {text}
      </Link>
      {active && <div className="w-[6rem] h-1 bg-blue-600" />}
    </div>
  );
}
