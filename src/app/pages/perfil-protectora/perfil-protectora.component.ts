import { Component, OnInit } from '@angular/core';
import { Protectora } from 'src/app/models/protectora';
import { Imagenes } from 'src/app/models/imagenes';
import { ImagenesService } from 'src/app/shared/imagenes.service';
import { ProtectoraService } from 'src/app/shared/protectora.service';
import { SesionesService } from 'src/app/shared/sesiones.service';
@Component({
  selector: 'app-perfil-protectora',
  templateUrl: './perfil-protectora.component.html',
  styleUrls: ['./perfil-protectora.component.css']
})

export class PerfilProtectoraComponent implements OnInit {

  public protectora: Protectora;
  public id:number;
  public imagenes:Imagenes[];

  constructor(private apiService: ProtectoraService, private sesiones: SesionesService, private imagenServicio: ImagenesService) { 
    this.protectora = new Protectora(null, "", "", "", "", "", null, "", "")
  
  }

  ngOnInit(): void {
  //   this.apiService.getProtectora(this.sesiones.id_usuario).subscribe((data: Protectora[]) => {
  //   this.protectora = data[0];
  //   console.log(this.protectora);
  //   })
    
  // this.imagenServicio.obtenerImagen(this.id)
  // .subscribe((data:Imagenes[])=>{
  //   this.imagenes=data;
  //   console.log(this.imagenes);
   

  // })
  this.id= this.apiService.idProtectora;
  console.log(this.id);
  console.log(this.protectora);
  
  this.apiService.obtenerId(this.sesiones.id_usuario)
  .subscribe((data:Protectora[])=>{
 
          this.protectora=data[0];
          console.log(this.protectora);
         
        })


 this.imagenServicio.getImagen(this.sesiones.id_usuario)
 .subscribe((data:Imagenes[])=>{
   this.imagenes=data;
   console.log(this.imagenes);
  

 })



  }
 
 

  public mostrarProtectora(id:any)
  { 
    this.apiService.getProtectora(this.sesiones.id_usuario).subscribe((data: Protectora[]) =>
    {
      this.protectora = data[0];
      console.log(this.protectora);
      
    })
  }

  //  insertarProtectora(id:any, nombre: string, direccion: string, localidad: string, email: string, password: string, telefono: string, imagen:string, descripcion:string)
  // { 
  //   this.apiService.postProtectora(new Protectora(id, nombre, direccion, localidad,email, password, telefono,imagen, descripcion))
  //   .subscribe((data:any) =>
  //   {
  //     console.log(data);
  //     if(data != "-1")
  //      alert("se ha insertado una nueva protectora con id: " + data)
  //     else
  //       alert("Error al insertar la protectora");
      
  //   })
  // }
 
  public modificarProtectora(id:any, nombre: string, direccion: string, localidad: string, email: string, password: string, telefono: string, descripcion:string, imagen:string)
  {
    
    this.apiService.putProtectora(new Protectora(this.sesiones.id_usuario, nombre, direccion, localidad,email, password, telefono, descripcion,imagen))

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