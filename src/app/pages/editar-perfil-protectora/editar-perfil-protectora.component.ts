import { Component, OnInit } from '@angular/core';
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

  constructor(private apiService: ProtectoraService, private sesiones: SesionesService) { 
    this.protectora = new Protectora (null,"","","","","","","","")
  }

  editarPerfil(nombre: string, direccion: string, localidad: string, telefono:any, imagen:string, descripcion:string){
    this.id= this.apiService.idProtectora; 
    let protect = new Protectora (this.id, nombre, direccion, localidad,"", "", telefono, descripcion, imagen)
    for(let propiedad in protect){

        if(protect[propiedad]==""){
          protect[propiedad]=null
        }
    }   


    this.apiService.putProtectora(protect)
    .subscribe((data:string) =>{
      console.log(data);
      if(data=="1"){

        alert("Se ha modificado correctamente");
        console.log(data);
      }
      else{
        alert("No se puede modificar")
      
        }

      console.log(data);
    })
}




  
  // onSubmit(form: NgForm){
    
  //   this.apiService.putProtectora(this.protectora)
  //   .subscribe((data: any) =>
  //   {
  //     this.sesiones.id_usuario;
  //     console.log(data);
  //     if (data != "-1")
  //       alert("Se modificado la protectora " + data)
  //     else
  //       alert("Error al modificar la protectora");

  //   })
  // }

  ngOnInit(): void {
  }

}
