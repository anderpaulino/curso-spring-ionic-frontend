import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html',
})
export class SingupPage {

  formGroup: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      nome: ['Joaquim',[Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      email: ['joaquim@gmail.com',[Validators.required, Validators.email]],
      tipo: ['1',[Validators.required]],
      cpfOuCnpj: ['06134596280',[Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      senha: ['123',[Validators.required]],
      logradouro: ['Rua via',[Validators.required]],
      numero: ['25',[Validators.required]],
      complemento: ['APTO 3',[]],
      bairro: ['Copacabana',[]],
      cep: ['10828333',[Validators.required]],
      telefone1: ['99990000',[Validators.required]],
      telefone2: ['',[]],
      telefone3: ['',[]],
      estadoId: [null, [Validators.required]],
      cidadeId: [null,[Validators.required]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingupPage');
  }

  singupUser(){
    console.log('Usuário enviou');
  }

  updateCidades(){

  }

}
