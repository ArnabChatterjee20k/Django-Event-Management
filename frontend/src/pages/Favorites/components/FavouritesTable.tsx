import useFavorites from "../../../services/useFavorites";
import DataTable, { TableColumn } from "react-data-table-component";
import { FavoriteStorage, FavoriteEvent } from "../../../types/FavoriteStorage";
import DeleteFavorite from "./DeleteFavorite";

const columns: TableColumn<FavoriteEvent>[] = [
  {
    name: "#",
    cell: (_, rowIdx) => rowIdx + 1,
    grow: 0,
    width: "auto",
    style: { fontWeight: "bold" },
  },
  { name: "Date/Time", cell: (row) => row.data_time },
  { name: "Event", cell: (row) => row.name },
  { name: "Category", cell: (row) => row.category },
  { name: "Venue", cell: (row) => row.venue },
  {
    name: "Favorite",
    cell: (row) => <DeleteFavorite id={row.id} />,
  },
];

export default function FavouritesTable() {
  const { favorites, isFavouritesFetched, isFavouritesLoading } =
    useFavorites();

  if (isFavouritesLoading)
    return <h1 className="text-white text-2xl">Loading</h1>;
  else if (isFavouritesFetched)
    return (
      <DataTable
        customStyles={{
          table: { style: { width: "80%", marginInline: "auto" } },
          headCells: { style: { fontWeight: "bold", fontSize: "1rem" } },
        }}
        columns={columns}
        data={Object.values(favorites as FavoriteStorage) as FavoriteEvent[]}
      />
    );
}
