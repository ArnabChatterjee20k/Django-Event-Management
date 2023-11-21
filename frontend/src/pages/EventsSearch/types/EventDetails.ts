interface ArtistTeam{
  name:string,
  url:string
}
export default interface EventDetails {
  date_time: {
    localDate: string;
    localTime: string;
  };
  name: string;
  artists_team: ArtistTeam[];
  venue: {
    name: string;
    city: string;
    state: string;
    address: string;
    location: {
      lat: string;
      long: string;
    };
  };
  genre: string;
  price_ranges: {
    max: number;
    min: number;
  };
  ticket_link: string;
  seat_map: string;
  ticket_status: string;
  open_hours: string;
  phone_number: string;
  general_rule: string;
  child_rule: string;
}
