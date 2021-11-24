import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Employee} from "../entities/employeeData";
import {Datasource} from "../entities/datasource";
import {map} from "rxjs";

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss'],
})
export class EmployeesTableComponent implements OnInit {

  employees: Employee[] = []
  datasource!: Datasource;

  constructor(
    private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getDatasource()
    this.getEmployees()
  }

  getEmployees(): void {
    this.employeeService
      .getEmployees().pipe(
      map((employees) =>
        employees.map((e) => new Employee(e, this.datasource))
      )).subscribe(employees => this.employees = employees)
  }

  getDatasource(): void {
    this.employeeService.getDatasource().subscribe(datasource => this.datasource = datasource)
  }

}
