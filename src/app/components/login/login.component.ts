import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string="";
  password:string="";
  
  constructor(private loginService:LoginService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  login(){
    if(this.userName!=="admin"){
      return
    }
    if(this.password!=="admin"){
      return
    }
    this.loginService.login();
    this.router.navigate(['/'])
  }

}
