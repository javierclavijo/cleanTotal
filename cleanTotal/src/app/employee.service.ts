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
    return of(POPULATION)
  }

}
