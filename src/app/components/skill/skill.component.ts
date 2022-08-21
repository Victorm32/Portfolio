import { Component, OnInit } from '@angular/core';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Persona, Skill } from 'src/app/interfaces/persona.interface';
import { PersonaService } from 'src/app/service/persona.service';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  faPen = faPen;
  faTimes = faTimes;
  estoyLogiado:boolean=false;
  estoyEditandoLenguaje:boolean=false;
  estoyEditandoPorcentaje:boolean=false;
  lenguajes:string[]=[];
  porcentajes:string[]=[];
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

  editarLenguaje(): void{
    this.estoyEditandoLenguaje=!this.estoyEditandoLenguaje;
  }

  editarPorcentaje(): void{
    this.estoyEditandoPorcentaje=!this.estoyEditandoPorcentaje;
  }


  guardarLenguaje(sk:Skill, index: number){
    this.persona.skill.forEach(ski=>{
                                    if(sk.id===ski.id){
                                      ski.lenguaje=this.lenguajes[index];
                                    }}
     )
   
   this.personaService.updateData(this.persona).subscribe({error:console.error,complete:()=>{this.getData}})
 }

 guardarPorcentaje(sk:Skill, index: number){
  this.persona.skill.forEach(ski=>{
                                  if(sk.id===ski.id){
                                    ski.porcentaje= +this.porcentajes[index];
                                  }}
   )
 
 this.personaService.updateData(this.persona).subscribe({error:console.error,complete:()=>{this.getData}})
}

}
