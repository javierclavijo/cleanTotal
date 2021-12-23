import {Injectable} from '@angular/core';
import {BehaviorSubject, lastValueFrom, map, Observable, shareReplay} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Datasource, initialDatasource} from "./entities/Datasource";
import {Employee, EmployeeData} from "./entities/Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  DATASOURCE_URL: string = 'http://localhost:3000/data'
  EMPLOYEES_URL: string = 'http://localhost:3000/person'

  private _employees: BehaviorSubject<Employee[]> = new BehaviorSubject<Employee[]>([])
  public readonly employees: Observable<Employee[]> = this._employees.asObservable()

  private _datasource: BehaviorSubject<Datasource> = new BehaviorSubject<Datasource>(initialDatasource)
  public readonly datasource: Observable<Datasource> = this._datasource.asObservable()

  constructor(private http: HttpClient) {
    lastValueFrom(this.loadInitialDatasource())
      .then(response => this.loadInitialEmployees())
  }

  loadInitialDatasource(): Observable<Datasource> {
    const observable = this.http.get<Datasource>(this.DATASOURCE_URL)
    observable.subscribe(response => this._datasource.next(response))
    return observable
  }

  loadInitialEmployees(): Observable<Employee[]> {
    const observable = this.http.get<EmployeeData[]>(this.EMPLOYEES_URL).pipe(
      map(employees => employees.map(e => new Employee(e, this._datasource.getValue())))
    )
    observable.subscribe(response => this._employees.next(response))
    return observable
  }

  addEmployee(data: EmployeeData): Observable<EmployeeData> {
    const observable = this.http.post<EmployeeData>(this.EMPLOYEES_URL, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(shareReplay())

    observable.subscribe(response => {
        const newEmployees = [...this._employees.getValue(), new Employee(response, this._datasource.getValue())]
        this._employees.next(newEmployees)
      }
    )

    return observable
  }

  updateEmployee(id: number, data: EmployeeData): Observable<EmployeeData> {
    const observable = this.http.put<EmployeeData>(`${this.EMPLOYEES_URL}/${id}`, data,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(shareReplay())

    observable.subscribe(response => {
      const newEmployees = this._employees.getValue()
      const employeeIndex = newEmployees.findIndex(e => e.id === response.id)
      newEmployees.splice(employeeIndex, 1, new Employee(response, this._datasource.getValue()))
      this._employees.next(newEmployees)
    })

    return observable
  }

  deleteEmployee(id: number): Observable<Object> {
    const observable = this.http.delete<EmployeeData>(`${this.EMPLOYEES_URL}/${id}`
    ).pipe(shareReplay())

    observable.subscribe(response => {
      const newEmployees = this._employees.getValue()
      const employeeIndex = newEmployees.findIndex(e => e.id === response.id)
      newEmployees.splice(employeeIndex, 1)
      this._employees.next(newEmployees)
    })

    return observable
  }

}
