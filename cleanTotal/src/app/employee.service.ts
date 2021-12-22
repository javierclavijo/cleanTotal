import {Injectable} from '@angular/core';
import {lastValueFrom, map, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Datasource} from "./entities/Datasource";
import {Employee, EmployeeData} from "./entities/Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  DATASOURCE_URL: string = 'http://localhost:3000/data'
  EMPLOYEES_URL: string = 'http://localhost:3000/person'
  datasource!: Datasource;

  constructor(private http: HttpClient) {
  }

  async getEmployees(): Promise<Observable<Employee[]>> {
    await lastValueFrom(this.getDatasource()).then(
      datasource => this.datasource = datasource
    )
    return this.http.get<EmployeeData[]>(this.EMPLOYEES_URL).pipe(map(
      employees => employees.map(e => new Employee(e, this.datasource))
    ))
  }

  getDatasource(): Observable<Datasource> {
    return this.http.get<Datasource>(this.DATASOURCE_URL)
  }

  addEmployee(data: EmployeeData): Observable<EmployeeData> {
    return this.http.post<EmployeeData>(this.EMPLOYEES_URL, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  updateEmployee(id: number, data: EmployeeData): Observable<EmployeeData> {
    return this.http.put<EmployeeData>(`${this.EMPLOYEES_URL}/${id}`, data,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
  }

}
