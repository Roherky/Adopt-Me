import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Protectora } from 'src/app/models/protectora';
import { ProtectoraService } from 'src/app/shared/protectora.service';
import { SesionesService } from 'src/app/shared/sesiones.service';

@Component({
  selector: 'app-editar-perfil-protectora',
  templateUrl: './editar-perfil-protectora.component.html',
  styleUrls: ['./editar-perfil-protectora.component.css']
})
export class EditarPerfilProtectoraComponent implements OnInit {
  public protectora:Protectora;
  constructor(private apiService: ProtectoraService, private sesiones: SesionesService) { 
    this.protectora
  }
  
  onSubmit(form: NgForm){
    
    this.apiService.putProtectora(this.protectora)
    .subscribe((data:string) =>
    {
      this.sesiones.id_usuario;
      console.log(data);
      if (data != "-1")
        alert("Se modificado la protectora " + data)
      else
        alert("Error al modificar la protectora");

    })
  }

  ngOnInit(): void {
  }

}
