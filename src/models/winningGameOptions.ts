export class WinningGameOptions {
  //#region PROPERTIES

  public readonly maxDuration: number;
  public readonly maxpoints: number;
  public readonly maxRounds: number;

  //#endregion

  //#region METHODS

  public constructor(
    maxDuration: number,
    maxpoints: number,
    maxRounds: number,
  ) {
    this.maxDuration = maxDuration;
    this.maxpoints = maxpoints;
    this.maxRounds = maxRounds;
  }

  //#endregion
}
