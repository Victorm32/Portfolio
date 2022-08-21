import { Component, OnInit } from '@angular/core';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Persona } from 'src/app/interfaces/persona.interface';
import { LoginService } from 'src/app/service/login.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  faPen = faPen;
  faTimes = faTimes;
  estoyLogiado:boolean=false;
  estoyEditando:boolean=false;
  estoyEditandoAcercaDe:boolean=false;

  nombre:string="";
  puesto:string="";
  domicilio:string="";
  acercaDe:string="";
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

  editar(): void{
    this.estoyEditando=!this.estoyEditando;
  }

  editarAcercaDe(): void{
    this.estoyEditandoAcercaDe=!this.estoyEditandoAcercaDe;
  }  

  guardarNombre(){
    this.persona.nombreYApellido=this.nombre;
    this.personaService.updateData(this.persona).subscribe({error:console.error,complete:()=>{this.getData}})
  }
  
  guardarPuesto(){
    this.persona.puesto=this.puesto;
    this.personaService.updateData(this.persona).subscribe({error:console.error,complete:()=>{this.getData}})
  }

  guardarDireccion(){
    this.persona.direccion=this.domicilio;
    this.personaService.updateData(this.persona).subscribe({error:console.error,complete:()=>{this.getData}})
  }

  guardarAcercaDe(){
    this.persona.acercaDe=this.acercaDe;
    this.personaService.updateData(this.persona).subscribe({error:console.error,complete:()=>{this.getData}})
  }

}
