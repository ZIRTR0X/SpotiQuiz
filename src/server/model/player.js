export class Player {
  //#region PROPERTIES

  id;
  name;

  m_score = 0;
  get score() {
    return this.m_score;
  }

  //#endregion

  //#region METHODS

  constructor(id, name, score) {
    this.id = id;
    this.name = name;
    this.m_score = score;
  }

  /** Add score to the current score of the player.
   * @param score The score to add.
   */
  addScore(score): void {
    this.m_score += score;
  }

  //#endregion
}
