import { type WinningGameOptions } from "./winningGameOptions";

export class GameOptions {
  //#region PROPERTIES

  public readonly id: string;
  public readonly maxMusicDuration: number;
  public readonly winningGameOptions: WinningGameOptions;

  //#endregion

  //#region METHODS

  public constructor(
    id: string,
    maxMusicDuration: number,
    winningGameOptions: WinningGameOptions,
  ) {
    this.id = id;
    this.maxMusicDuration = maxMusicDuration;
    this.winningGameOptions = winningGameOptions;
  }

  //#endregion
}
