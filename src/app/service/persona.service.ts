import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Persona } from '../interfaces/persona.interface';
import { Observable } from 'rxjs';

const url = 'https://whispering-thicket-86654.herokuapp.com';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {  
  
  constructor(private http:HttpClient) { }

  getData():Observable<Persona>{
    return this.http.get<Persona>(url+"/user")
  }

  updateData(persona:Persona){
    return this.http.put(url+"/user",persona)
  }

}
