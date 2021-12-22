import {Component, Input, OnInit} from '@angular/core';
import {Employee} from "../../../entities/Employee";

@Component({
  selector: '[employees-table-row]',
  templateUrl: './employees-table-row.component.html',
  styleUrls: ['./employees-table-row.component.scss']
})
export class EmployeesTableRowComponent implements OnInit {

  @Input() employee!: Employee

  constructor() {
  }

  ngOnInit(): void {
  }

}
