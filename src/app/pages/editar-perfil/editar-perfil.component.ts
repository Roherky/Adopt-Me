import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Protectora } from 'src/app/models/protectora';
import { ProtectoraService } from 'src/app/shared/protectora.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  public tipoUsuario: string;
  public protectora:Protectora

  constructor(private apiService: ProtectoraService) {
    this.tipoUsuario = "protectora";
  }
  onSubmit(form: NgForm){
    this.apiService.putProtectora(this.protectora)
    .subscribe((data:string) =>
    {
    
      console.log(data);
      if (data != "-1")
        alert("Se modificado la protectora con id: " + data)
      else
        alert("Error al modificar la protectora");

    })
  }

  ngOnInit(): void {
  }

}
