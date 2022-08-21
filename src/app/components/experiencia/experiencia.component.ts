import { Component, OnInit } from '@angular/core';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/service/login.service';
import { Experiencia, Persona, } from 'src/app/interfaces/persona.interface';
import { PersonaService } from 'src/app/service/persona.service';



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  faPen = faPen;
  faTimes = faTimes;
  estoyLogiado:boolean=false;
  estoyEditandoTitulo:boolean=false;
  estoyEditandoDescripcion:boolean=false;
  titulos:string[]=[];
  descripcion:string[]=[];
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

  editarTitulo(): void{
    this.estoyEditandoTitulo=!this.estoyEditandoTitulo;
  }

  editarDescripcion(): void{
    this.estoyEditandoDescripcion=!this.estoyEditandoDescripcion;
  }

  guardarTitulo(exp:Experiencia, index: number){
     this.persona.experiencias.forEach(expe=>{
                                              if(exp.id===expe.id){
                                                expe.titulo=this.titulos[index];
                                              }}
      )
    
    this.personaService.updateData(this.persona).subscribe({error:console.error,complete:()=>{this.getData}})
  }

  guardarDescripcion(exp:Experiencia, index: number){
    this.persona.experiencias.forEach(expe=>{
                                             if(exp.id===expe.id){
                                               expe.descripcion=this.descripcion[index];
                                             }}
     )
   
   this.personaService.updateData(this.persona).subscribe({error:console.error,complete:()=>{this.getData}})
 }

 borrarExperiencia(id:number){
      this.persona.experiencias = this.persona.experiencias.filter(e => e.id !== id)
      this.personaService.updateData(this.persona).subscribe({error:console.error,complete:()=>{this.getData}})     
 }

}
