import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Employee} from "./employee";
// @ts-ignore
import {readFileSync} from "fs";
import {POPULATION} from "../assets/info-population"

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() {
  }

  getEmployees(): Observable<Employee[]> {
    return of(POPULATION.map(e => new Employee(
      e.id,
      e.name,
      e.surname,
      e.surname2,
      e.sex,
      e["country-id"],
      e.phone,
      e.datebirthday,
      e.lastModification
    )))
  }

}
