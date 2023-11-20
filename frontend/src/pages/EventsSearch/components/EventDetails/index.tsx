import useEventDetails from "../../services/useEventDetails";
import { useParams, Outlet } from "react-router-dom";
import EventTabs from "./EventTabs";
import BackButton from "./BackButton";

export default function index() {
  const { id } = useParams();
  const { data } = useEventDetails(id as string);
  return (
    <div className="w-[880px] backdrop-blur-sm bg-white/30  mx-auto mt-[5rem]">
      <div className="w-full px-4 py-5">
        <BackButton />
      </div>
      <EventTabs />
      <div className="px-12 py-5">
        {data && <Outlet />}
      </div>
    </div>
  );
}
