import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public userRegister: User = {};

  constructor() { }

  ngOnInit() {
  }

}
