import useEventDetails from "../../services/useEventDetails";
import { useParams, Outlet } from "react-router-dom";
import EventTabs from "./EventTabs";
import BackButton from "./BackButton";
import EventName from "./EventName";
import EmptyResultIndicator from "../EmptyResultIndicator";

export default function index() {
  const { id } = useParams();
  const { data, isLoading,isError } = useEventDetails(id as string);
  if (isLoading) return <p className="text-2xl font-bold text-white text-center ">Loading.....</p>;
  if(isError) return <EmptyResultIndicator text="Some Problem Occured"/>
  return (
    <div className="w-[880px] backdrop-blur-sm bg-white/10  mx-auto mt-[5rem]">
      <div className="w-full px-10 py-5">
        <BackButton />
      </div>
      <div className="px-10 py-8">
        <EventName />
      </div>
      <EventTabs />
      <div className="px-12 py-8">{data && <Outlet />}</div>
    </div>
  );
}
