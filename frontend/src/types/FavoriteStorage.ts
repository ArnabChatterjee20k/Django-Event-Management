export type FavoriteStorage = FavoriteEvent[]

export interface FavoriteEvent {
  name: string;
  data_time: string;
  category: string;
  venue: string;
}
