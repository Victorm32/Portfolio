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
  estoyLogiado=false;
  hayError=false;
  
  constructor(private loginService:LoginService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.estoyLogiado=this.loginService.estaLogiado()
  }

  login(){
    this.loginService.login(this.userName, this.password)
                      .subscribe((data:any) =>{
                                   if (data.isUser){  
                                    this.router.navigate(['/']) 
                                  }else{
                                    this.hayError = true
                                  }
                                } );

  }
  cerrarAlert(){
    this.hayError = false
  }
}
