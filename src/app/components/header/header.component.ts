import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

estoyLogiado:boolean=false

  constructor(private loginService:LoginService, 
    private router:Router,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.estoyLogiado=this.loginService.estaLogiado()
  }
  logout(){
    this.loginService.logout()
    this.location.back()
    this.location.back()
  }

}
