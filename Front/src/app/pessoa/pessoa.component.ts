import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'telefone', 'sexo', 'dataNascimento'];
  dataSource: Pessoa[];
  campoPessoa: Pessoa;

  ngOnInit(): void {
  }

  AplicarCampo(evento){

    var valor = (<HTMLInputElement>document.getElementById(evento.srcElement.id)).value;
    var name = evento.srcElement.id;
    console.log(valor + " " + evento.srcElement.id)

  }

  AoDigitar(evento){
    this.httpClient.get<Pessoa>('Pessoa/' + evento.target.value).subscribe(result => {
      this.dataSource = [];
      this.dataSource.push(result);
    }, error => this.dataSource = []);
  }

  ListarTodos(){
    this.httpClient.get<Pessoa[]>('Pessoa').subscribe(result => {
      this.dataSource = result;
    }, error => this.dataSource = []);
  }

  //Adicionar(){
  //  this.httpClient.post<any>('Pessoa', this.campoPessoa).subscribe( result =>{
  //    this.dataSource = result;
  //  }, error => this.dataSource = []);
  //}

  ConsultarPorId(){
    this.httpClient.get<Pessoa[]>('Pessoa/').subscribe(result => {
      this.dataSource = result;
      var pessoa = result[0].cpf;
       
       console.log(pessoa)
    }, error => console.error(error));
  }
}

export interface Pessoa {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  sexo: string;
  dataNascimento: string;
}
