import { type Album } from "./album";
import { type Artist } from "./artist";

export class Music {
  //#region PROPERTIES

  id;
  title;
  artists;
  album;
  duration;
  explicit;
  type;
  url;

  //#endregion

  //#region METHODS

  public constructor(
    id,
    title,
    artists,
    album,
    duration,
    explicit,
    type,
    url,
  ) {
    this.id = id;
    this.title = title;
    this.artists = artists;
    this.album = album;
    this.duration = duration;
    this.explicit = explicit;
    this.type = type;
    this.url = url;
  }

  //#endregion
}
