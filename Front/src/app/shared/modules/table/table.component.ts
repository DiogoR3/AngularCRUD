import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {

  @Input() dataSource: MatTableDataSource<any>;
  @Input() displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Output() deleteRow: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  loaded: boolean = true;
  clickedRow: number = 0;

  constructor(private datePipe: DatePipe, private dialog: MatDialog) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  rowClick(rowId: number): void {
    this.clickedRow = rowId;
  }

  dateFormat(input: any): string {
    if (!isNaN(input) || input.length < 10 || input.substr(4, 1) != '-' || input.substr(7, 1) != '-')
      return input;

    return this.datePipe.transform(input, 'yyyy-MM-dd');
  }

  openDeleteDialog(element: any): void {
    this.dialog.open(DialogComponent, { data: { 
      title: "Do you really want to delete this item?", 
      content: `<strong>${this.displayedColumns[0].toUpperCase()}: </strong>${element.id}<br><strong>${this.displayedColumns[1].toUpperCase()}: </strong>${element.name}`, 
      cancelTxt: "Cancel", 
      confirmTxt: "Delete" 
    } 
    })
    .afterClosed().subscribe(confirmed => {
      if(confirmed){
        this.deleteRow.emit(element?.id ?? 0);
      }
    });
  }
}