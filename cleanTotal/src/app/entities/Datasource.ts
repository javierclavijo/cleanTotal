export interface Datasource {
  sex: GenderLanguageData[],
  language: GenderLanguageData[],
  country: CountryData[]
}

export interface GenderLanguageData {
  id: number,
  description: string,
  key: string,
}

export class GenderLanguage {
  id: number
  description: string
  key: string


  constructor(id: number, description: string, key: string) {
    this.id = id;
    this.description = description;
    this.key = key;
  }

  valueOf(): string {
    return this.description
  }
}

export interface CountryData {
  id: number,
  description: string,
  prefix: number,
  language: string,
}

export class Country {
  id: number
  description: string
  prefix: number
  language: string


  constructor(id: number, description: string, prefix: number, language: string) {
    this.id = id;
    this.description = description;
    this.prefix = prefix;
    this.language = language;
  }

  valueOf(): string {
    return this.description
  }
}
