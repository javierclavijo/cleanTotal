import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {EmployeeData} from "./entities/employeeData";
import {HttpClient} from "@angular/common/http";
import {Datasource} from "./entities/datasource";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  DATASOURCE_URI: string = 'http://localhost:3000/data/'
  EMPLOYEES_URI: string = 'http://localhost:3000/person/'

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<EmployeeData[]> {
    return this.http.get<EmployeeData[]>(this.EMPLOYEES_URI)
  }

  getDatasource(): Observable<Datasource> {
    return this.http.get<Datasource>(this.DATASOURCE_URI)
  }

}
