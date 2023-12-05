/* eslint-disable @typescript-eslint/no-explicit-any */


declare namespace Intl {
  class ListFormat {
    constructor(locales?: string | string[], options?: Intl.ListFormatOptions);
    public format: (items: string[]) => string;
  }
}

export type ThemeContextTypes = {
  theme: string;
  setTheme:any;
}

export interface Country{
  name:string | any;
  region:string;
  subregion: string;
  population:number;
  currencies:object;
  language: object;
  borders: Array;
  index:number;
  flags:any;
  border:string;
  png:string;
  capital:Array;
  tld:string;
  languages:object


}