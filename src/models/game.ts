import { type GameOptions } from "./gameOptions";
import { type Music } from "./music";
import { type Player } from "./player";
import { type Playlist } from "./playlist";

export class Game {
  //#region PROPERTIES

  public readonly id: string;
  public readonly gameCode: string;
  public readonly players: Player[];
  public readonly playlist: Playlist;
  public readonly startDate: Date;
  public readonly endDate: Date;
  public readonly host: string;
  public readonly options: GameOptions;
  public readonly currentMusic: Music;

  //#endregion

  //#region METHODS

  public constructor(
    id: string,
    gameCode: string,
    players: Player[],
    playlist: Playlist,
    startDate: Date,
    endDate: Date,
    host: string,
    options: GameOptions,
    currentMusic: Music,
  ) {
    this.id = id;
    this.gameCode = gameCode;
    this.players = players;
    this.playlist = playlist;
    this.startDate = startDate;
    this.endDate = endDate;
    this.host = host;
    this.options = options;
    this.currentMusic = currentMusic;
  }

  //#endregion
}
