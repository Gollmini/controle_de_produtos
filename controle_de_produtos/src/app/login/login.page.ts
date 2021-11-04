import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/interface/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

public userLogin: User = {};

  constructor() { }

  ngOnInit() {
  }

}
