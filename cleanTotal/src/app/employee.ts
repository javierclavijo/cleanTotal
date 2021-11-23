import {DATASOURCE, DatasourceCountry, DatasourceSexOrLanguage} from "../assets/datasource";

export interface EmployeeData {
  id: number,
  name: string,
  surname: string,
  surname2: string,
  sex: "H" | "M",
  "country-id": number,
  phone: string,
  datebirthday: string,
  lastModification: string
}

export class Employee {
  id: number
  name: string
  surname: string
  surname2: string
  readonly #sexId: "H" | "M"
  readonly #countryId: Number
  phone: string
  readonly #datebirthday: string
  readonly #lastModification: string
  country: DatasourceCountry | undefined
  gender: DatasourceSexOrLanguage | undefined
  birthDate: Date
  lastModified: Date

  constructor(id: number, name: string, surname: string, surname2: string, sexId: "H" | "M", countryId: Number, phone: string, datebirthday: string, lastModification: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.surname2 = surname2;
    this.phone = phone;
    this.#sexId = sexId;
    this.#countryId = countryId;
    this.#datebirthday = datebirthday;
    this.#lastModification = lastModification;

    this.country = DATASOURCE.country.find(x => x.id === this.#countryId)
    this.gender = DATASOURCE.sex.find(x => x.key === this.#sexId)
    this.birthDate = new Date(this.#datebirthday)
    this.lastModified = new Date(this.#lastModification)
  }
}
