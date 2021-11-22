import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Employee} from "../employee";
import {Datasource, DATASOURCE} from "../../assets/datasource";

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css'],
})
export class EmployeesTableComponent implements OnInit {

  employees: Employee[] = []
  datasource: Datasource = DATASOURCE


  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getEmployees()
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees)
  }

}
