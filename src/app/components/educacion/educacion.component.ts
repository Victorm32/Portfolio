import { Component, OnInit } from '@angular/core';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  faPen = faPen;
  faTimes = faTimes;
  estoyLogiado:boolean=false;



  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.estoyLogiado=this.loginService.estaLogiado()
  }
}
