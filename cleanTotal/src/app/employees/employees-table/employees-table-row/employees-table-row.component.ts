import {Component, Input, OnInit} from '@angular/core';
import {Employee, EmployeeData} from "../../../entities/Employee";
import {FormControl, Validators} from "@angular/forms";
import {EmployeeService} from "../../../employee.service";
import {formatDate} from "@angular/common";

@Component({
  selector: '[employees-table-row]',
  templateUrl: './employees-table-row.component.html',
  styleUrls: ['./employees-table-row.component.scss']
})
export class EmployeesTableRowComponent implements OnInit {

  @Input() employee!: Employee

  fullName = new FormControl('', Validators.required)

  constructor(
    private service: EmployeeService
  ) {
  }

  ngOnInit(): void {
    this.fullName.setValue(this.employee.fullName)
  }

  onChange(): void {
    const name = this.fullName.value;
    const nameParts = name.replace(',', '').split(' ')

    const updatedEmployeeData: EmployeeData = {
      id: this.employee.id,
      name: nameParts[2],
      surname: nameParts[0],
      surname2: nameParts[1],
      sex: this.employee.gender.key === 'M' ? 'M' : 'H',
      countryId: this.employee.country.id,
      phone: this.employee.phone,
      datebirthday: this.employee.birthDate.toISOString(),
      lastModification: new Date().toISOString()
    }

    this.service.updateEmployee(this.employee.id, updatedEmployeeData)
  }

}
