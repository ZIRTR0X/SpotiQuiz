import { type Artist } from "./artist";
import { type Image } from "./image";

export class Album {
  //#region PROPERTIES

  public readonly id: string;
  public readonly images: Image[];
  public readonly name: string;
  public readonly release_date: string;
  public readonly release_date_precision: string;
  public readonly total_tracks: number;
  public readonly artists: Artist[];
  public readonly type: string;
  public readonly uri: string;

  //#endregion

  //#region METHODS

  public constructor(
    id: string,
    images: Image[],
    name: string,
    release_date: string,
    release_date_precision: string,
    total_tracks: number,
    artists: Artist[],
    type: string,
    uri: string,
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
