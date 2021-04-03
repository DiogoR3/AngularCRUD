import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonComponent } from './modules/person/person.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'person',
    pathMatch: 'full'
  },
  {
    path: 'person',
    component: PersonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }