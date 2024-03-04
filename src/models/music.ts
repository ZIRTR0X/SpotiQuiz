import { type Album } from "./album";
import { type Artist } from "./artist";

export class Music {
  //#region PROPERTIES

  public readonly id: string;
  public readonly title: string;
  public readonly artists: Artist[];
  public readonly album: Album;
  public readonly duration: number;
  public readonly explicit: boolean;
  public readonly type: string;
  public readonly url: string;

  //#endregion

  //#region METHODS

  public constructor(
    id: string,
    title: string,
    artists: Artist[],
    album: Album,
    duration: number,
    explicit: boolean,
    type: string,
    url: string,
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
