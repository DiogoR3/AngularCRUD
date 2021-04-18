import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  @Input() dataSource: any;
  @Input() displayedColumns: string[];
  @Output() clickedRow: EventEmitter<any> = new EventEmitter<any>();

  selectRow(row: any): void {
    this.clickedRow.emit(row);
  }

  ngOnInit(): void {
    console.log(this.dataSource)
    console.log(this.displayedColumns)
  }

}
