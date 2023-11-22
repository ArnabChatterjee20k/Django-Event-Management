import FavouritesTable from "./components/FavouritesTable"

export default function index() {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
        <h3 className="text-white text-2xl">List of your favorite events</h3>
        <FavouritesTable/>
    </div>
  )
}
