export class Image {
  //#region PROPERTIES

  public readonly height: number;
  public readonly url: string;
  public readonly width: number;

  //#endregion

  //#region METHODS

  public constructor(height: number, url: string, width: number) {
    this.height = height;
    this.url = url;
    this.width = width;
  }

  //#endregion
}
