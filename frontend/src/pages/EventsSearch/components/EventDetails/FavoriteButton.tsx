import { Heart } from "lucide-react";
import useFavorites from "../../../../services/useFavorites";
import useEventDetails from "../../services/useEventDetails";
import { useParams } from "react-router-dom";
import { FavoriteEvent } from "../../../../types/FavoriteStorage";

export default function FavoriteButton() {
  const { id } = useParams();
  const { data } = useEventDetails(id as string);

  const { addToFavoites } = useFavorites();
  function handleSubmit() {
    const event: FavoriteEvent = {
      name: data?.name as string,
      category: data?.genre as string,
      data_time: `${data?.date_time.localDate} ${data?.date_time.localTime}`,
      venue: data?.venue.name as string,
    };
    addToFavoites(event);
  }
  return (
    <div className="p-2 bg-white rounded-full border-4 border-cyan-400">
      <Heart
        fill="transparent"
        stroke="red"
        height={32}
        width={32}
        className="cursor-pointer hover:fill-red-600"
        onClick={handleSubmit}
      />
    </div>
  );
}
