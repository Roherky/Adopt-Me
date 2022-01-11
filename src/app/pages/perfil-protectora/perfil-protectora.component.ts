import { Component, OnInit } from '@angular/core';
import { Protectora } from 'src/app/models/protectora';
import { Imagenes } from 'src/app/models/imagenes';
import { ImagenesService } from 'src/app/shared/imagenes.service';
import { ProtectoraService } from 'src/app/shared/protectora.service';
import { SesionesService } from 'src/app/shared/sesiones.service';
import { AnimalService } from 'src/app/shared/animal.service';
import { Animal } from 'src/app/models/animal';
@Component({
  selector: 'app-perfil-protectora',
  templateUrl: './perfil-protectora.component.html',
  styleUrls: ['./perfil-protectora.component.css']
})

export class PerfilProtectoraComponent implements OnInit {
  public protectora: Protectora;
  public id:number;
  public imagenes:Imagenes[];
  public imagen:Imagenes;
  public animales:Animal[];

  constructor(private apiService: ProtectoraService, public sesion: SesionesService, private imagenServicio: ImagenesService, private animalServicio: AnimalService) { 
    this.protectora = new Protectora(null, "", "", "", "", "", null, "", "");
    this.imagen=new Imagenes(null, null, null, null, null, null, "");
   console.log(this.sesion.id_usuario)
  }

  ngOnInit(): void {
    this.id= this.sesion.id_usuario;
    this.apiService.obtenerId(this.id)
    .subscribe((data: Protectora[]) => {
    this.protectora = data[0];
    })
    
this.imagenServicio.getImagenProtectora(this.id)
.subscribe((data:Imagenes[])=>{
     this.imagen=data[0];
    
   })
   //obtenerAnimalesProtectora

 this.animalServicio.obtenerAnimalesProtectora(this.id)
 .subscribe((data:Animal[])=>{
   this.animales=data;
  
 })

  }
 
 
 
  public modificarProtectora(id:any, nombre: string, direccion: string, localidad: string, email: string, password: string, telefono: string, descripcion:string, imagen:string)
  {
    
    this.apiService.putProtectora(new Protectora(this.sesion.id_usuario, nombre, direccion, localidad,email, password, telefono, descripcion,imagen))

    .subscribe((data:any) => 
    {
      console.log(data);
      if(data != "-1")
        alert("Se ha actualizado la protectora con id: " + data)
      else
        alert("Error al actualizar la protectora");
    })
  }

  //  eliminarProtectora(id:string)
  // {
  //   this.apiService.deleteProtectora({"id":id})
  //   .subscribe((data) =>
  //   {
  //     console.log(data);
  //     if (data != "-1")
  //     alert("Se ha eliminado la protectora con id: " + data)
  //   else
  //     alert("Error al eliminar la protectora");

  //   })

//   }

 }
  