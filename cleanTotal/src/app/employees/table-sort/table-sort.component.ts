import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-table-sort',
  templateUrl: './table-sort.component.html',
  styleUrls: ['./table-sort.component.scss']
})
export class TableSortComponent implements OnInit {

  @Input() sortBy: "fullName" | "birthDate" | "gender" | "phone" | "country" | "lastModified" = 'fullName'
  @Output() sortEvent = new EventEmitter<"fullName" | "birthDate" | "gender" | "phone" | "country" | "lastModified">()

  constructor() {
  }

  ngOnInit(): void {
  }

  emitSortEvent() {
    this.sortEvent.emit(this.sortBy)
  }

}
