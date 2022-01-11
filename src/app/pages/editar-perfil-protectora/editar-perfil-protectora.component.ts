import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Imagenes } from 'src/app/models/imagenes';
import { Protectora } from 'src/app/models/protectora';
import { ImagenesService } from 'src/app/shared/imagenes.service';
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
  public imagenes:Imagenes;

  constructor(private apiService: ProtectoraService, public sesiones: SesionesService, private imagenServicio: ImagenesService, private router:Router) { 
    this.protectora = new Protectora (null,"","","","","","","","");
    this.imagenes=new Imagenes(null, null, null, null, null, null, "");
  }

  editarPerfil(nombre: string, direccion: string, localidad: string, telefono:any, imagen:string, descripcion:string, imagenNosotros:string){
    this.id= this.sesiones.id_usuario;
    let protect = new Protectora (this.id, nombre, direccion, localidad,"", "", telefono, descripcion, imagen);
    let imagenSobreNosotros=new Imagenes(null, null, this.sesiones.id_usuario, null, null, null, imagenNosotros);

    // 
  //   for(let propiedad in imagenSobreNosotros){

  //     if(imagenSobreNosotros[propiedad]==""){
  //       imagenSobreNosotros[propiedad]=null
  //     }
  // }

  if(imagenNosotros!=""){
  this.imagenServicio.añadirImagen(imagenSobreNosotros)
  .subscribe((data:string) =>{
    if(data !="-1"){

      
    }
    else{
      alert("No se puede modificar")
    
      }

  })

  }



    for(let propiedad in protect){

        if(protect[propiedad]==""){
          protect[propiedad]=null
        }
    }   



    this.apiService.putProtectora(protect)
    .subscribe((data:string) =>{
      if(data !="-1"){

        alert("Se ha modificado correctamente");
        this.router.navigate(['/perfilProtectora'])
      }
      else{
        alert("No se puede modificar")
      
        }

    })


    


    // this.imagenServicio.obtenerImagen(this.id)
    // .subscribe((data:Imagenes[])=>{
    //   this.imagenes=data;
    //   console.log(this.imagenes);
  
    // })
}

  ngOnInit(): void {
  }

}
