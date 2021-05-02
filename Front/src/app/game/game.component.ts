import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Game } from './game.model';
import { GameService } from './game.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(router: Router, private gameService: GameService, private fb: FormBuilder) { }

  displayedColumns: string[] = ['id', 'name', 'publisher', 'launch', 'action'];
  dataSource: MatTableDataSource<Game> = new MatTableDataSource<Game>();
  loaded: boolean;
  search: string;

  ngOnInit(): void {
    this.loaded = false

    this.gameService.getGame().subscribe(
      data => this.dataSource = new MatTableDataSource<Game>(data),
      error => console.log(error.message),
      () => this.loaded = true)
  }

  applyFilter() {
    this.dataSource.filter = this.search;
  }

  addGame(game: Game) {
    this.gameService.createGame(game).subscribe(data => {
      this.gameService.showMessage('Game added!')
      this.ngOnInit()
    },
      error => console.log(error)
    )
  }

  deleteGame(rowId: number): void {
    if (!rowId) return

    this.gameService.deleteGame(rowId).subscribe(data => {
      this.gameService.showMessage('Game deleted!')
      this.ngOnInit()
    },
      error => this.gameService.showMessage('Could not delete game!')
    )
  }
}
