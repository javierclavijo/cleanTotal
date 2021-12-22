import {Component, Input, OnInit} from '@angular/core';
import {Employee, EmployeeData} from "../../../entities/Employee";
import {FormControl, Validators} from "@angular/forms";
import {EmployeeService} from "../../../employee.service";
import {Datasource} from "../../../entities/Datasource";
import {firstValueFrom} from "rxjs";
import {formatDate} from "@angular/common";

@Component({
  selector: '[employees-table-row]',
  templateUrl: './employees-table-row.component.html',
  styleUrls: ['./employees-table-row.component.scss']
})
export class EmployeesTableRowComponent implements OnInit {

  @Input() employee!: Employee
  @Input() datasource!: Datasource


  edit: boolean = false

  name = new FormControl('', Validators.required)
  surname = new FormControl('', Validators.required)
  surname2 = new FormControl('', Validators.required)
  birthDate = new FormControl('', Validators.required)
  gender = new FormControl('', Validators.required)
  country = new FormControl('', Validators.required)
  phone = new FormControl('', Validators.required)

  constructor(
    private service: EmployeeService
  ) {
  }

  ngOnInit(): void {
  }

  setFormValues(): void {
    this.name.setValue(this.employee.name)
    this.surname.setValue(this.employee.surname)
    this.surname2.setValue(this.employee.surname2)
    this.birthDate.setValue(formatDate(this.employee.birthDate, 'yyyy-MM-dd', 'en-US'))
    this.gender.setValue(this.employee.gender.key)
    this.country.setValue(this.employee.country.id)
    this.phone.setValue(this.employee.phone)
  }

  toggleEdit($event: Event): void {
    $event.preventDefault()
    this.setFormValues()
    this.edit = !this.edit
  }

  async submit($event: Event): Promise<void> {
    $event.preventDefault()

    const updatedEmployeeData: EmployeeData = {
      id: this.employee.id,
      name: this.name.value,
      surname: this.surname.value,
      surname2: this.surname2.value,
      sex: this.gender.value,
      countryId: Number(this.country.value),
      phone: this.phone.value,
      datebirthday: new Date(this.birthDate.value).toISOString(),
      lastModification: new Date().toISOString()
    }
    console.log(updatedEmployeeData)

    const updatedEmployee = this.service.updateEmployee(this.employee.id, updatedEmployeeData)
    this.employee = new Employee(
      await firstValueFrom(updatedEmployee),
      this.datasource
    )
    this.toggleEdit($event)
  }

}
