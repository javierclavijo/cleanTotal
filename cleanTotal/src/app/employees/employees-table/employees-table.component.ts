import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../employee.service";
import {EmployeeArray} from "../../entities/employeeArray";

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss'],
})
export class EmployeesTableComponent implements OnInit {

  employees: EmployeeArray = new EmployeeArray()
  currentPage: number = 1;
  columnsToDisplay = ['name', 'birthDate', 'gender', 'phone', 'country', 'lastModified']

  constructor(
    private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getEmployees()
  }

  async getEmployees(): Promise<void> {
    let employeesObservable = await this.employeeService.getEmployees()
    employeesObservable.subscribe(e => this.employees = new EmployeeArray(...e))
  }


  sortEmployees(
    by: "fullName" | "birthDate" | "gender" | "phone" | "country" | "lastModified"): void {
    this.employees.sortEmployees(by)
  }

}
