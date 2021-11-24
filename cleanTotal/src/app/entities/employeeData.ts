import {Datasource, DatasourceCountry, DatasourceSexOrLanguage} from "./datasource";

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
  phone: string
  country: DatasourceCountry | undefined
  gender: DatasourceSexOrLanguage | undefined
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
    this.country = datasource.country.find(x => x.id === employeeData.countryId)
    this.gender = datasource.sex.find(x => x.key === employeeData.sex)
    this.birthDate = new Date(employeeData.datebirthday)
    this.lastModified = new Date(employeeData.lastModification)
  }
}
