export class Player {
  //#region PROPERTIES

  public readonly id: string;
  public readonly name: string;

  private m_score = 0;
  public get score(): number {
    return this.m_score;
  }

  //#endregion

  //#region METHODS

  public constructor(id: string, name: string, score: number) {
    this.id = id;
    this.name = name;
    this.m_score = score;
  }

  /** Add score to the current score of the player.
   * @param score The score to add.
   */
  public addScore(score: number): void {
    this.m_score += score;
  }

  //#endregion
}
