import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { ClickOutsideDirective } from '../../directives/clickoutside.directive';

import { TableComponent } from './table.component';

@NgModule({
  declarations: [
    TableComponent, 
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule
  ],
  exports: [TableComponent]
})

export class TableModule { }
