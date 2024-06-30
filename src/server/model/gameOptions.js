import WinningGameOptions from "./winningGameOptions";

export class GameOptions {
  //#region PROPERTIES

  id;
  maxMusicDuration;
  winningGameOptions;

  //#endregion

  //#region METHODS

  public constructor(
    id,
    maxMusicDuration,
    winningGameOptions,
  ) {
    this.id = id;
    this.maxMusicDuration = maxMusicDuration;
    this.winningGameOptions = winningGameOptions;
  }

  //#endregion
}
