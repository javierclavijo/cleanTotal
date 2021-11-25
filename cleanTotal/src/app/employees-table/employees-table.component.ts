import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Employee} from "../entities/employeeData";
import {Datasource} from "../entities/datasource";

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss'],
})
export class EmployeesTableComponent implements OnInit {

  employees: Employee[] = []
  datasource!: Datasource;
  currentPage: number = 1;

  constructor(
    private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getDatasource()
    this.getEmployees()
  }

  async getEmployees(): Promise<void> {
    let employeesObservable = await this.employeeService.getEmployees()
    employeesObservable.subscribe(e => this.employees = e)
  }

  getDatasource(): void {
    this.employeeService.getDatasource().subscribe(datasource => this.datasource = datasource)
  }

}
