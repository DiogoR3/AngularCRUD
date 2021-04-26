import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';

// table
import { TableComponent } from './table.component';
import { ClickOutsideDirective } from '../../directives/clickoutside.directive';

@NgModule({
  declarations: [
    TableComponent,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule
  ],
  providers: [DatePipe],
  exports: [TableComponent]
})

export class TableModule { }
