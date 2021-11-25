import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-table-sort',
  templateUrl: './table-sort.component.html',
  styleUrls: ['./table-sort.component.scss']
})
export class TableSortComponent implements OnInit {

  @Input() keys: Array<string> = []
  @Output() sortEvent = new EventEmitter<Function>()
  order: 'asc' | 'desc' = 'asc'

  constructor() {
  }

  ngOnInit(): void {

  }

  emitSortEvent() {
    const sortFunction = (a: any, b: any) => {
      this.keys.forEach(k => a = a[k])
      this.keys.forEach(k => b = b[k])

      if (a > b) {
        return this.order === "asc" ? 1 : -1
      }
      if (b > a) {
        return this.order === "asc" ? -1 : 1
      }
      return 0
    }

    this.sortEvent.emit(sortFunction)
    this.order = this.order === 'asc' ? 'desc' : 'asc'
  }

}
