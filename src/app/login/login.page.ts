import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userLogin: User = {};

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

 async login(user : User){
    try {
      await this.authService.login(this.userLogin);
    } catch (error) {
      console.log('realizando login');
    } finally {
      console.log('realizando login');
    }
   
  }

}
