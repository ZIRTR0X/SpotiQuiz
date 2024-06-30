export class Artist {
  //#region PROPERTIES

  id;
  name;
  type;
  uri;

  //#endregion

  //#region METHODS

  constructor(id, name, type, uri) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.uri = uri;
  }

  //#endregion
}
