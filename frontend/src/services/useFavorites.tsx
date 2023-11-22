import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FavoriteEvent, FavoriteStorage } from "../types/FavoriteStorage";
import { Favorites } from "../utils/Favorites";
export default function useFavorites() {
  const client = useQueryClient();
  const {
    data: favorites,
    isSuccess: isFavouritesFetched,
    isLoading: isFavouritesLoading,
  } = useQuery<FavoriteStorage>({
    queryKey: ["favourites"],
    queryFn: () => Promise.resolve(Favorites.getFromStorage()),
    staleTime: Infinity,
  });

  const insertMutator = useMutation({
    mutationFn: (data: FavoriteEvent) =>
      Promise.resolve(Favorites.insertToStorage(data)),
  });

  const deleteMutator = useMutation({
    mutationFn: (id: string) =>
      Promise.resolve(Favorites.deleteFromStorage(id)),
  });

  function addToFavoites(data: FavoriteEvent) {
    insertMutator.mutate(data, {
      onSuccess: () => {
        client.invalidateQueries({ queryKey: ["favourites"] });
      },
    });
  }

  function deleteFromStorage(id: string) {
    deleteMutator.mutate(id, {
      onSuccess: () => {
        client.invalidateQueries({ queryKey: ["favourites"] });
      },
    });
  }

  return {
    addToFavoites,
    deleteFromStorage,
    favorites,
    isFavouritesFetched,
    isFavouritesLoading,
  };
}
