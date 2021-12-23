export interface GenderLanguageData {
  id: number,
  description: string,
  key: string,
}

const initialGenderLanguageData = {
  id: 0,
  description: '',
  key: ''
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

const initialCountryData = {
  id: 0,
  description: '',
  prefix: 0,
  language: '',
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

export interface Datasource {
  sex: GenderLanguageData[],
  language: GenderLanguageData[],
  country: CountryData[]
}

export const initialDatasource: Datasource = {
  sex: [initialGenderLanguageData],
  language: [initialGenderLanguageData],
  country: [initialCountryData]
}
