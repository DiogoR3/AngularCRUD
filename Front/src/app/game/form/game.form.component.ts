import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Game } from '../game.model';

@Component({
  selector: 'app-game-form',
  templateUrl: './game.form.component.html',
  styleUrls: ['./game.form.component.css']
})
export class GameFormComponent implements OnInit {

  @Input() submitText: string = 'Submit'
  @Input()
  get game(): Game { return this._game; }
  set game(game: Game) {
    this._game = game
    if(game)
      this.gameForm.setValue(game)
  }
  private _game: Game = null
  @Output() onSubmit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>()

  constructor(private fb: FormBuilder) { }

  gameForm: FormGroup = this.fb.group({
    id: [null],
    name: [null, Validators.required],
    publisher: [null, Validators.required],
    launch: [null, Validators.required],
  });

  ngOnInit(): void {}

  submit(formDirective) {
    this.onSubmit.emit(this.gameForm.value)
    this.gameForm.reset()
    formDirective.resetForm()
  }

  getNameErrorMessage() {
    if (this.gameForm.controls.name.errors?.required)
      return "Name is required"
  }

  getPublisherErrorMessage() {
    if (this.gameForm.controls.name.errors?.required)
      return "Publisher is required"
  }

  getLaunchErrorMessage() {
    if (this.gameForm.controls.name.errors?.required)
      return "Launch is required"
  }

}
