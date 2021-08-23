import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs/';
import { environment } from '../../environments/environment';

import { Game } from './game.model'

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) { }

  private readonly baseURL: string = environment.apiUrl + 'game'

  getGame(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(this.baseURL);
  }

  getGameById(id: number): Observable<Game> {
    return this.httpClient.get<Game>(`${this.baseURL}/${id}`);
  }

  createGame(game: Game): Observable<Game> {
    game.id = 0
    return this.httpClient.post<Game>(this.baseURL, game);
  }

  updateGame(game: Game): Observable<Game> {
    return this.httpClient.put<Game>(`${this.baseURL}/${game.id}`, game);
  }

  deleteGame(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseURL}/${id}`)
  }

  showMessage(message: string) : void {
    this.snackBar.open(message, 'X', 
    { 
      duration: 5_000,
      horizontalPosition: 'right',
      verticalPosition: 'top', 
    })
  }
}