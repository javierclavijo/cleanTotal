import {Employee} from "./Employee";

export interface TableFilter {
  by: keyof Employee,
  filter: string
}
