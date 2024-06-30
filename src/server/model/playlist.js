import { type Music } from "./music";

export class Playlist {
  //#region PROPERTIES

  id;
  musics;

  //#endregion

  //#region METHODS

  constructor(id, musics) {
    this.id = id;
    this.musics = musics ?? [];
  }

  addMusic(music): void {
    this.musics.push(music);
  }

  removeMusic(music: Music): void {
    const index = this.musics.indexOf(music);

    if (index !== -1) this.musics.splice(index, 1);
  }

  //#endregion
}
