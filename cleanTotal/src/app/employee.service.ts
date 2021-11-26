import {Injectable} from '@angular/core';
import {lastValueFrom, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Datasource} from "./entities/datasource";
import {Employee, EmployeeData} from "./entities/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  DATASOURCE_URI: string = 'http://localhost:3000/data/'
  EMPLOYEES_URI: string = 'http://localhost:3000/person/'
  datasource!: Datasource;

  constructor(private http: HttpClient) {
  }

  async getEmployees(): Promise<Observable<Employee[]>> {
    await lastValueFrom(this.getDatasource()).then(
      datasource => this.datasource = datasource
    )
    return this.http.get<EmployeeData[]>(this.EMPLOYEES_URI).pipe(map(
      employees => employees.map(e => new Employee(e, this.datasource))
    ))
  }

  getDatasource(): Observable<Datasource> {
    return this.http.get<Datasource>(this.DATASOURCE_URI)
  }

}
