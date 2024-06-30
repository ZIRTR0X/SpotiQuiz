import Artist from "./artist";
import Image from "./image";

export class Album {
  //#region PROPERTIES

  id;
  images;
  name;
  release_date;
  release_date_precision;
  total_tracks;
  artists;
  type;
  uri;

  //#endregion

  //#region METHODS

  constructor(
    id,
    images,
    name,
    release_date,
    release_date_precision,
    total_tracks,
    artists,
    type,
    uri,
  ) {
    this.id = id;
    this.images = images;
    this.name = name;
    this.release_date = release_date;
    this.release_date_precision = release_date_precision;
    this.total_tracks = total_tracks;
    this.artists = artists;
    this.type = type;
    this.uri = uri;
  }
}
