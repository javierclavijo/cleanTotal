import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../employee.service";
import {Employee} from "../../entities/Employee";
import {TableColumn} from "../../entities/TableColumn";

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss'],
})
export class EmployeesTableComponent implements OnInit {

  currentPage: number = 1;
  columns: TableColumn[] = [
    {name: 'Name', property: 'fullName'},
    {name: 'Birth Date', property: 'birthDate'},
    {name: 'Gender', property: 'gender'},
    {name: 'Telephone number', property: 'phone'},
    {name: 'Country', property: 'country'},
    {name: 'Last modified', property: 'lastModified'}
  ]

  filter: string = ''
  sortBy?: keyof Employee
  sortOrder: 'asc' | 'desc' = 'asc'

  constructor(public employeeService: EmployeeService) {
  }

  ngOnInit(): void {
  }

  sortEmployees(by: keyof Employee): void {
    this.sortOrder = by !== this.sortBy ?
      'asc' :
      this.sortOrder === 'asc' ?
        'desc' :
        'asc'

    this.sortBy = by
  }

  filterEmployees($event: { filter: string }) {
    this.filter = $event.filter
  }
}
