import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// material
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

// person
import { PersonComponent } from './person.component';
import { PersonEditComponent } from './edit/person.edit.component';
import { PersonRoutingModule } from './person.routing.module';

// modules
import { TableModule } from '../shared/modules/table/table.module';

@NgModule({
  declarations: [
    PersonComponent,
    PersonEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatButtonModule,
    PersonRoutingModule,

    TableModule
  ],
  providers: []
})
export class PersonModule { }
