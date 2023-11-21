import { useQuery, useMutation } from "@tanstack/react-query";
import { FavoriteEvent, FavoriteStorage } from "../types/FavoriteStorage";
import { Favorites } from "../utils/Favorites";
export default function useFavorites() {
  const { data: favorites } = useQuery<FavoriteStorage>({
    queryKey: ["favourites"],
    queryFn: () => Promise.resolve(Favorites.getFromStorage()),
    staleTime: Infinity,
  });

  const mutator = useMutation({
    mutationFn: (data: FavoriteEvent) =>
      Promise.resolve(Favorites.insertToStorage(data)),
  });

  function addToFavoites(data: FavoriteEvent) {
    mutator.mutate(data, {
      onSuccess: () => {
        alert("Added to Favorites");
      },
    });
  }

  return { addToFavoites, favorites };
}
