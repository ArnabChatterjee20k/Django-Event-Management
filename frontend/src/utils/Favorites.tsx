import config from "../config";
import { FavoriteEvent, FavoriteStorage } from "../types/FavoriteStorage";

export class Favorites {
  static KEY = config.LOCAL_STORAGE_FAVORITE_KEY;
  static getFromStorage(): FavoriteStorage {
    const parsedData = localStorage.getItem(Favorites.KEY);
    if (!parsedData) return [];
    const data: FavoriteStorage = JSON.parse(parsedData);
    return data;
  }

  static insertToStorage(data: FavoriteEvent): void {
    const currentData = Favorites.getFromStorage();
    const newData = [...currentData, data];
    localStorage.setItem(Favorites.KEY, JSON.stringify(newData));
  }
}
