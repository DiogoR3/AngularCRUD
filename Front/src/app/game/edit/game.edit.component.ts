import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Game } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game.edit.component.html',
  styleUrls: ['./game.edit.component.css']
})

export class GameEditComponent implements OnInit {

  gameId: any;
  game: Observable<Game> = new Observable<Game>()

  constructor(private router: Router, private route: ActivatedRoute, private gameService: GameService) { }

  ngOnInit() {
    this.gameId = this.route.snapshot.paramMap.get('id');
    this.game = this.gameService.getGameById(this.gameId);
  }

  updateGame(game: Game){
    this.gameService.updateGame(game).subscribe(data => {
      this.gameService.showMessage('Game updated!')
      this.router.navigate(['/game'])
    },
      error => {
        this.gameService.showMessage('Could not update game!')
        console.log(error)
      }
    )
  }
}
