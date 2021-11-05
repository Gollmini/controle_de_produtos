import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import {User} from 'src/app/interface/user';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

public userLogin: User = {};

public limpar(){
  this.userLogin.email = '';
  this.userLogin.password = '';
}

public salvarLogin(){
  console.log("salvar login");
  console.log(this.userLogin.email);
  this.storage.set("EMAIL", this.userLogin.email);
  this.storage.set("SENHA:", this.userLogin.password);
}

  constructor(public storage: Storage) { this.storage.create()}

  ngOnInit() {
  }

}
