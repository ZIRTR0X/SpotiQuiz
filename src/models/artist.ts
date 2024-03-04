export class Artist {
  //#region PROPERTIES

  public readonly id: string;
  public readonly name: string;
  public readonly type: string;
  public readonly uri: string;

  //#endregion

  //#region METHODS

  public constructor(id: string, name: string, type: string, uri: string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.uri = uri;
  }

  //#endregion
}
