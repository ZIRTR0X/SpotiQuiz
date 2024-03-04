export class WinningGameOptions {
  //#region PROPERTIES

  public readonly id: string;
  public readonly maxDuration: number;
  public readonly maxpoints: number;
  public readonly maxRounds: number;

  //#endregion

  //#region METHODS

  public constructor(
    id: string,
    maxDuration: number,
    maxpoints: number,
    maxRounds: number,
  ) {
    this.id = id;
    this.maxDuration = maxDuration;
    this.maxpoints = maxpoints;
    this.maxRounds = maxRounds;
  }

  //#endregion
}
