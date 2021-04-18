import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { TableComponent } from './table.component';
import { ClickOutsideDirective } from '../../directives/clickoutside.directive';

@NgModule({
  declarations: [
    TableComponent, 
    ClickOutsideDirective
  ],
  imports: [
    MatTableModule,
    CommonModule
  ],
  exports: [TableComponent]
})

export class TableModule { }
