import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { PersonComponent } from './person.component';
import { PersonEditComponent } from './edit/person.edit.component';
import { PersonRoutingModule } from './person.routing.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from '../shared/modules/table/table.module';

@NgModule({
  declarations: [
    PersonComponent,
    PersonEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatSlideToggleModule,

    PersonRoutingModule,
    TableModule
  ]
})
export class PersonModule { }
