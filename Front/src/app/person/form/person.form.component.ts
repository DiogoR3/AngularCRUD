import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Person } from '../person.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person.form.component.html',
  styleUrls: ['./person.form.component.css']
})
export class PersonFormComponent implements OnInit {

  @Input() submitText: string = 'Submit'
  @Input()
  get person(): Person { return this._person; }
  set person(person: Person) {
    this._person = person
    if(person)
      this.personForm.setValue(person)
  }
  private _person: Person = null
  @Output() onSubmit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>()

  constructor(private fb: FormBuilder) { }

  personForm: FormGroup = this.fb.group({
    id: [null],
    name: [null, Validators.required],
    cpf: [null, [Validators.required, forbiddenCPFValidator(/^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/g)]],
    email: [null, [Validators.required, Validators.email]],
    phone: [null],
    birthdate: [null, Validators.required],
  }, { validators: nameEqualsCpfFunction });

  ngOnInit(): void {}

  submit(formDirective) {
    this.onSubmit.emit(this.personForm.value)
    this.personForm.reset()
    formDirective.resetForm()
  }

  getNameErrorMessage() {
    if (this.personForm.controls.name.errors?.required)
      return "Name is required"
  }

  getCPFErrorMessage() {
    if (this.personForm.controls.cpf.errors?.required)
      return "CPF is required"

    if (this.personForm.controls.cpf.errors?.forbiddenCPF)
      return "Not a valid CPF"
  }

  getEmailErrorMessage() {
    if (this.personForm.controls.email.errors?.required)
      return "Email is required"

    if (this.personForm.controls.email.errors)
      return "Not a valid email"
  }

  getBirthdateErrorMessage() {
    if (this.personForm.controls.birthdate.errors?.required)
      return "Birthdate is required"
  }

  formErrorMessage(): string {
    if (!this.personForm.value.name || !this.personForm.value.cpf)
      return;

    if (this.personForm.errors?.nameAndCpfEquals)
      return "*Name and CPF cannot be the same"
  }
}

const nameEqualsCpfValidator1: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const name = control.get('name');
  const cpf = control.get('cpf');
  return name && cpf && name.value === cpf.value ? { nameAndCpfEquals: true } : null;
};

function nameEqualsCpfValidator2(control: AbstractControl): ValidationErrors | null {
  const name = control.get('name');
  const cpf = control.get('cpf');
  return name && cpf && name.value === cpf.value ? { nameAndCpfEquals: true } : null;
};

const nameEqualsCpfFunction: ValidatorFn = nameEqualsCpfValidator2

function forbiddenCPFValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? null : { forbiddenCPF: { value: control.value } };
  };
}
