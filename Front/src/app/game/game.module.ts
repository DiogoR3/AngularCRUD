import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { GameComponent } from './game.component';
import { GameEditComponent } from './edit/game.edit.component';
import { GameRoutingModule } from './game.routing.module';

// modules
import { TableModule } from '../shared/modules/table/table.module';
import { GameFormComponent } from './form/game.form.component';

@NgModule({
  declarations: [
    GameComponent,
    GameEditComponent,
    GameFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatButtonModule,
    GameRoutingModule,

    TableModule
  ],
  providers: []
})
export class GameModule { }
