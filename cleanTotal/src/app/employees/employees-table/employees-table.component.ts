import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../employee.service";
import {EmployeeList} from "../../entities/EmployeeList";
import {Employee} from "../../entities/Employee";
import {TableColumn} from "../../entities/TableColumn";
import {TableFilter} from "../../entities/TableFilter";

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss'],
})
export class EmployeesTableComponent implements OnInit {

  employees: EmployeeList = new EmployeeList()

  currentPage: number = 1;
  columns: TableColumn[] = [
    {name: 'Name', property: 'fullName'},
    {name: 'Birth Date', property: 'birthDate'},
    {name: 'Gender', property: 'gender'},
    {name: 'Telephone number', property: 'phone'},
    {name: 'Country', property: 'country'},
    {name: 'Last modified', property: 'lastModified'}
  ]

  constructor(
    private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getEmployees()
  }

  async getEmployees(): Promise<void> {
    let employeesObservable = await this.employeeService.getEmployees()
    employeesObservable.subscribe(e => this.employees = new EmployeeList(...e))
  }

  sortEmployees(
    by: keyof Employee): void {
    this.employees.sortEmployees(by)
  }

  filterEmployees($event: TableFilter) {
    this.employees.filterEmployees($event.filter, $event.by)
  }
}
