import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  estoyLogiado:boolean=false;

  constructor() {}

  estaLogiado():boolean{
    return this.estoyLogiado;
  }

  login(){
    this.estoyLogiado=true;
  }
}
