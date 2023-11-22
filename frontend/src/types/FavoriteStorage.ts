export interface FavoriteStorage {
  [key: string]: FavoriteEvent;
};

export interface FavoriteEvent {
  id:string;
  name: string;
  data_time: string;
  category: string;
  venue: string;
}
