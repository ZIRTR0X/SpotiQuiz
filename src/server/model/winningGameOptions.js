export class WinningGameOptions {
  //#region PROPERTIES

  maxDuration;
  maxpoints;
  maxRounds;

  //#endregion

  //#region METHODS

  /**
     * @param {any} maxDuration
     * @param {any} maxpoints
     * @param {any} maxRounds
     */
  constructor(maxDuration, maxpoints, maxRounds) {
    this.maxDuration = maxDuration;
    this.maxpoints = maxpoints;
    this.maxRounds = maxRounds;
  }

  //#endregion
}
