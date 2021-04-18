import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() dataSource: any;
  @Input() displayedColumns: string[];
  @Output() rowClick: EventEmitter<any> = new EventEmitter<any>();

  selectedRow: any;

  constructor() { }

  ngOnInit(): void {
  }

  selectRow(row: any): void {
    this.selectedRow = row;
    this.rowClick.emit(this.selectedRow);
  }
}
