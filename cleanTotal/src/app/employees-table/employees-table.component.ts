import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Employee} from "../employee";
import {Datasource, DATASOURCE} from "../../assets/datasource";

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss'],
})
export class EmployeesTableComponent implements OnInit {

  MAX_PAGE: number;
  ELEMENTS_PER_PAGE: number = 6;

  allEmployees: Employee[] = []
  shownEmployees: Employee[] = []
  datasource: Datasource = DATASOURCE
  currentPage: number = 0

  constructor(private employeeService: EmployeeService) {
    this.getEmployees()
    this.MAX_PAGE = Math.floor(this.allEmployees.length / this.ELEMENTS_PER_PAGE) - 1
    this.getShownEmployees()
  }

  ngOnInit(): void {
    this.getEmployees()
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => this.allEmployees = employees)
  }

  getShownEmployees(): void {
    this.shownEmployees = this.allEmployees.slice(0, this.ELEMENTS_PER_PAGE)
  }

  setPage(page: number): void {
    this.currentPage = page

    if (this.currentPage > this.MAX_PAGE) {
      this.currentPage = this.MAX_PAGE
    } else if (this.currentPage < 0) {
      this.currentPage = 0
    }

    this.shownEmployees = this.allEmployees.slice(this.currentPage * this.ELEMENTS_PER_PAGE, (this.currentPage * this.ELEMENTS_PER_PAGE) + this.ELEMENTS_PER_PAGE)
  }

  sortEmployees(
    by: "surname" | "birthDate" | "gender" | "phone" | "country" | "lastModified",
    order: "asc" | "desc" = "asc") {

    let sortingFunction;

    if (["surname", "birthDate", "phone", "lastModified"].includes(by)) {
      sortingFunction = (a: Employee, b: Employee) => {
        const valueA = a[by]
        const valueB = b[by]

        // @ts-ignore
        if (valueA > valueB) {
          return order === "asc" ? 1 : -1
        }
        // @ts-ignore
        if (valueB > valueA) {
          return order === "asc" ? -1 : 1
        }
        return 0
      }
    } else {
      sortingFunction = (a: Employee, b: Employee) => {
        // @ts-ignore
        const valueA = a[by]["description"]
        // @ts-ignore
        const valueB = b[by]["description"]
        // @ts-ignore
        if (valueA > valueB) {
          return order === "asc" ? 1 : -1
        }
        // @ts-ignore
        if (valueB > valueA) {
          return order === "asc" ? -1 : 1
        }
        return 0
      }
    }

    this
      .allEmployees
      .sort(sortingFunction)

    this
      .getShownEmployees()
  }

}
