import { type Music } from "./music";

export class Playlist {
  //#region PROPERTIES

  public readonly id: string;
  public readonly musics: Music[];

  //#endregion

  //#region METHODS

  public constructor(id: string, musics?: Music[]) {
    this.id = id;
    this.musics = musics ?? [];
  }

  public addMusic(music: Music): void {
    this.musics.push(music);
  }

  public removeMusic(music: Music): void {
    const index: number = this.musics.indexOf(music);

    if (index !== -1) this.musics.splice(index, 1);
  }

  //#endregion
}
