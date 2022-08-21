import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  estoyLogiado:boolean=false;

  constructor(private http:HttpClient) {}

  estaLogiado():boolean{
    return this.estoyLogiado;
  }

  login(user:string, password:string){

    const params= new HttpParams()
    .set('user', user)
    .set('password', password)

    return this.http.get("https://whispering-thicket-86654.herokuapp.com/user/login", {params})
                    .pipe(tap((data : any) =>{ if(data.isUser) {this.estoyLogiado = true} } ))
  }
  logout(){
    this.estoyLogiado=false
  }
}
