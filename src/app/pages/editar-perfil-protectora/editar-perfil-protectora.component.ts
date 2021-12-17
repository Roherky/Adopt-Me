import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public id:number;

  constructor(private apiService: ProtectoraService, public sesiones: SesionesService,  private router:Router) { 
    this.protectora = new Protectora (null,"","","","","","","","")
    console.log(this.sesiones.id_usuario)
  }

  editarPerfil(nombre: string, direccion: string, localidad: string, telefono:any, imagen:string, descripcion:string){
    this.id= this.sesiones.id_usuario;
    console.log(this.id)
    let protect = new Protectora (this.id, nombre, direccion, localidad,"", "", telefono, descripcion, imagen)
    console.log(protect)
    for(let propiedad in protect){

        if(protect[propiedad]==""){
          protect[propiedad]=null
        }
    }   


    this.apiService.putProtectora(protect)
    .subscribe((data:string) =>{
      console.log(data);
      console.log(protect)
      if(data !="-1"){

        alert("Se ha modificado correctamente");
        console.log(data);
        this.router.navigate(['/perfilProtectora'])
      }
      else{
        alert("No se puede modificar")
      
        }

      console.log(data);
    })
}

  ngOnInit(): void {
  }

}
