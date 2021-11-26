import {Employee} from "./employee";

export class EmployeeArray extends Array<Employee> {
  private sortedBy: string | undefined
  private sortedOrder: 'asc' | 'desc' | undefined

  constructor(...items: Employee[]) {
    super(...items)
  }

  sortEmployees(
    by: "fullName" | "birthDate" | "gender" | "phone" | "country" | "lastModified",
    order: "asc" | "desc" = "asc"): void {

    const sortByKey = (a: Employee, b: Employee) => {
      const valueA = a[by]
      const valueB = b[by]

      if (valueA > valueB) {
        return order === "asc" ? 1 : -1
      }
      if (valueB > valueA) {
        return order === "asc" ? -1 : 1
      }
      return 0
    }

    if (this.sortedBy === by && this.sortedOrder === order) {
      order = this.sortedOrder === 'asc' ? 'desc' : 'asc'
    }

    this.sort(sortByKey)
    this.sortedBy = by
    this.sortedOrder = order
  }

}
