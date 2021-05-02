import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameEditComponent } from './edit/game.edit.component';
import { GameComponent } from './game.component';

const gameRoutes: Routes = [
    { path: 'game', component: GameComponent },
    { path: 'game/:id/edit', component: GameEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(gameRoutes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
