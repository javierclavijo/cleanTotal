import {Country, CountryData, Datasource, GenderLanguage, GenderLanguageData} from "./datasource";

export interface EmployeeData {
  id: number,
  name: string,
  surname: string,
  surname2: string,
  sex: "H" | "M",
  countryId: number,
  phone: string,
  datebirthday: string,
  lastModification: string
}

export class Employee {
  id: number
  name: string
  surname: string
  surname2: string
  fullName: string
  phone: string
  country: Country
  gender: GenderLanguage
  birthDate: Date
  lastModified: Date

  constructor(
    employeeData: EmployeeData,
    datasource: Datasource
  ) {
    this.id = employeeData.id;
    this.name = employeeData.name;
    this.surname = employeeData.surname;
    this.surname2 = employeeData.surname2;
    this.phone = employeeData.phone;
    this.birthDate = new Date(employeeData.datebirthday)
    this.lastModified = new Date(employeeData.lastModification)
    this.fullName = `${this.surname} ${this.surname2}, ${this.name}`

    const country: CountryData = datasource.country.find(x => x.id === employeeData.countryId) ?? {
      id: 0,
      description: '',
      prefix: 0,
      language: ''
    }
    const gender: GenderLanguageData = datasource.sex.find(x => x.key === employeeData.sex) ?? {
      id: 0,
      description: '',
      key: ''
    }
    this.country = new Country(
      country.id,
      country.description,
      country.prefix,
      country.language
    )
    this.gender = new GenderLanguage(
      gender.id,
      gender.description,
      gender.key
    )
  }
}
