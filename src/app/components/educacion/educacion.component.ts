import { Component, OnInit } from '@angular/core';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/service/login.service';
import { Educacion, Persona } from 'src/app/interfaces/persona.interface';
import { PersonaService } from 'src/app/service/persona.service';




@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  faPen = faPen;
  faTimes = faTimes;
  estoyLogiado:boolean=false;
  estoyEditandoCarrera:boolean=false;
  estoyEditandoInstitucion:boolean=false;
  carrera:string[]=[];
  institucion:string[]=[];
  persona:Persona={
    acercaDe:"",
    direccion:"",
    educacion:[],
    experiencias:[],
    id:0,
    nombreYApellido:"",
    password:"",
    proyecto:[],
    puesto:"",
    skill:[],
    user:"",
  }



  constructor(private loginService:LoginService,
              private personaService:PersonaService) { }

ngOnInit(): void {
  this.estoyLogiado=this.loginService.estaLogiado()
            
  this.getData();
            
}
            
            
private getData() {
  this.personaService.getData().subscribe(data => this.persona = data);
}

editarCarrera(): void{
  this.estoyEditandoCarrera=!this.estoyEditandoCarrera;
}

editarInstitucion(): void{
  this.estoyEditandoInstitucion=!this.estoyEditandoInstitucion;
}

guardarCarrera(edu:Educacion, index: number){
  this.persona.educacion.forEach(educa=>{
                                           if(edu.id===educa.id){
                                             educa.carrera=this.carrera[index];
                                           }}
   )
 
 this.personaService.updateData(this.persona).subscribe({error:console.error,complete:()=>{this.getData}})
}

guardarInstitucion(edu:Educacion, index: number){
  this.persona.educacion.forEach(educa=>{
                                           if(edu.id===educa.id){
                                             educa.institucion=this.institucion[index];
                                           }}
   )
 
 this.personaService.updateData(this.persona).subscribe({error:console.error,complete:()=>{this.getData}})
}

borrarCarrera(id:number){
  this.persona.educacion = this.persona.educacion.filter(e => e.id !== id)
  this.personaService.updateData(this.persona).subscribe({error:console.error,complete:()=>{this.getData}})     
}

}
