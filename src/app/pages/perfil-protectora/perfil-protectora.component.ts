import { Component, OnInit } from '@angular/core';
import { Protectora } from 'src/app/models/protectora';
import { ProtectoraService } from 'src/app/shared/protectora.service';
@Component({
  selector: 'app-perfil-protectora',
  templateUrl: './perfil-protectora.component.html',
  styleUrls: ['./perfil-protectora.component.css']
})

export class PerfilProtectoraComponent implements OnInit {

  public protectora: Protectora;
  constructor(private apiService: ProtectoraService) { 
    this.protectora = new Protectora(0, "Abrazo Peludo", "C/ Las Rosas 22", "", "abrazo-peludo@gmail.com", "","910.000.000",'No podría existir sin la ayuda de las casas de acogidas y guarderías privadas, que ofrecen un hogar temporal a muchos de nuestros animales, hasta que les encontremos un adoptante definitivo. En la mayoría de los casos .\
    en ellas viven nuestros cachorros, perros de tamaño pequeño/mediano, todos los gatos y otras especies de compañía. \
    Para el resto de nuestros perros, a partir de medianos, si no hemos podido encontrarle una casa de acogida, Abrazo \
    Peludo dispone de su propio albergue. Un recinto espacioso donde se pueden albergar hasta unos 30 acogidos. \
    La finca en su totalidad se divide en varias zonas de diferentes funcionalidades \
    Existen 4 grandes patios (1 arbolado, 1 de césped y 2 de tierra) que se han dividido para que los perros salgan el mayor tiempo posible .\
    de forma grupal y en manadas equilibradas, siempre y cuando el clima lo permita. \
    Sus habitaciones/cheniles son espaciosos y dentro de los mismos disponen de casetas de madera con colchonetas \
    perfectamente aisladas y con mantas para las épocas de frío, especialmente dada su cercanía con la sierra. \
    Así mismo todos tienen su patio para que salgan a tomar el aire cuando quieran mientras esperan su turno de salida. \
    Durante su estancia en el albergue, aparte de ejercicio, nuestros perros reciben todos los cuidados necesarios: \
    alimentación, atención veterinaria, paseos con los voluntarios, y por supuesto, muchísimo cariño. \ ',"")
  }

  ngOnInit(): void {
  }

  public mostrarProtectora(id:any)
  { 
    this.apiService.getProtectora(id).subscribe((data: any) =>
    {
      this.protectora = data;
      console.log(this.protectora);
    })
  }

  //  insertarProtectora(id:any, nombre: string, direccion: string, localidad: string, email: string, password: string, telefono: string, descripcion:string)
  // { 
  //   this.apiService.postProtectora(new Protectora(id, nombre, direccion, localidad,email, password, telefono,descripcion))
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
    
    this.apiService.putProtectora(new Protectora(id, nombre, direccion, localidad,email, password, telefono, descripcion,imagen))

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

  // }

}