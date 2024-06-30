import  GameOptions  from "./gameOptions";
import  Music  from "./music";
import  Player  from "./player";
import  Playlist  from "./playlist";

export class Game {
  //#region PROPERTIES

  id;
  gameCode;
  players;
  playlist;
  startDate;
  endDate;
  host;
  options;
  currentMusic;

  //#endregion

  //#region METHODS

  public constructor(
    id,
    gameCode,
    players,
    playlist,
    startDate,
    endDate,
    host,
    options,
    currentMusic,
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
