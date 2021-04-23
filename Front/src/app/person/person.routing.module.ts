import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonEditComponent } from './edit/person.edit.component';
import { PersonComponent } from './person.component';

const personRoutes: Routes = [
    { path: 'person', component: PersonComponent },
    { path: 'person/:id/edit', component: PersonEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(personRoutes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
