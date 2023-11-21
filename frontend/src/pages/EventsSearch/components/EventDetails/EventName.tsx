import useEventDetails from "../../services/useEventDetails";
import { useParams } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

export default function EventName() {
  const { id } = useParams();
  const { data } = useEventDetails(id as string);
  return (
    <div className="flex gap-2 w-full justify-center items-center">
      <h3 className="text-2xl text-white font-medium text-center">
        {data?.name}
      </h3>
      <FavoriteButton/>
    </div>
  );
}
