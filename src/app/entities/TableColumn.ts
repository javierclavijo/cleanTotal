import {Employee} from "./Employee";

export interface TableColumn {
  name: string,
  property: keyof Employee
}
