
export class DropdownOptions {

  constructor(private _collapsable: boolean = true,
              private _collapsed: boolean = true,
              private _classList: Array<string> = [''],
              private _hasSubmenu: boolean = false) { }

  public get collapsable(): boolean {
    return this._collapsable;
  }

  public set collapsable(value: boolean) {
    this._collapsable = value;
  }

  public get collapsed(): boolean {
    return this._collapsed;
  }

  public set collapsed(value: boolean) {
    this._collapsed = value;
  }

  public get classList(): Array<string> {
    return this._classList;
  }

  public set classList(value: Array<string>) {
    this._classList = value;
  }

  public get hasSubmenu(): boolean {
    return this._hasSubmenu;
  }

  public set hasSubmenu(value: boolean) {
    this._hasSubmenu = value;
  }
}
