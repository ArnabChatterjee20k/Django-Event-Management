import { Trash } from "lucide-react";
import useFavorites from "../../../services/useFavorites";

export default function DeleteFavorite({ id }: { id: string }) {
  const { deleteFromStorage } = useFavorites();
  return (
    <button onClick={() => deleteFromStorage(id)}>
      <Trash className="fill-none hover:fill-black" />
    </button>
  );
}
