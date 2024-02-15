


declare namespace Intl {
  class ListFormat {
    constructor(locales?: string | string[], options?: Intl.ListFormatOptions);
    public format: (items: string[]) => string;
  }

  interface ListFormatOptions {
    localeMatcher?: "best fit" | "lookup";
    type?: "conjunction" | "disjunction" | "unit";
    style?: "long" | "short" | "narrow";
}
}

export type ThemeContextTypes = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

export type Theme = string | null;

export interface Country{
  name:{common:string, nativeName:{
    [key:string]:{
      official:string, common:string
    }
  }
};
  region:string;
  subregion: string;
  population:number;
  nativeName:{
    [key:string]:{
      official:string, common:string
    }
  }

currencies:{
  [currencyKey:string]:
  {name:string, symbol:string} 
};
  borders: [];
  index:number;
  flags:{png:string};
  border:string;
  png:string;
  capital:[];
  tld:string;
  languages:object
}

export type Regions = { dir: string, place: string }[]