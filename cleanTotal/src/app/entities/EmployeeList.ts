import {Employee} from "./Employee";

export class EmployeeList {
  private sortedBy: keyof Employee | undefined
  private sortedOrder: 'asc' | 'desc' | undefined
  private allEmployees: Employee[] = []
  array: Employee[] = []

  constructor(...items: Employee[]) {
    this.allEmployees = [...items]
    this.array = [...items]
  }

  sortEmployees(
    by: keyof Employee,
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

    this.allEmployees.sort(sortByKey)
    this.array.sort(sortByKey)
    this.sortedBy = by
    this.sortedOrder = order
  }

  filterEmployees(filter: string, by: keyof Employee) {
    this.array = this.allEmployees.filter(
      e => e[by].toString().toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase())
    )
  }

}
