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
    this.protectora = new Protectora(0, "Abrazo Peludo", "C/ Las Rosas 22", "", "abrazo-peludo@gmail.com", "","910.000.000")
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

   insertarProtectora(id:any, nombre: string, direccion: string, localidad: string, email: string, password: string, telefono: string)
  { 
    this.apiService.postProtectora(new Protectora(id, nombre, direccion, localidad,email, password, telefono))
    .subscribe((data:any) =>
    {
      console.log(data);
      if(data != "-1")
       alert("se ha insertado una nueva protectora con id: " + data)
      else
        alert("Error al insertar la protectora");
      
    })
  }
 
  public modificarProtectora(id:any, nombre: string, direccion: string, localidad: string, email: string, password: string, telefono: string)
  {
    
    this.apiService.putProtectora(new Protectora(id, nombre, direccion, localidad,email, password, telefono))

    .subscribe((data:any) => 
    {
      console.log(data);
      if(data != "-1")
        alert("Se ha actualizado la protectora con id: " + data)
      else
        alert("Error al actualizar la protectora");
    })
  }

   eliminarProtectora(id:string)
  {
    this.apiService.deleteProtectora({"id":id})
    .subscribe((data) =>
    {
      console.log(data);
      if (data != "-1")
      alert("Se ha eliminado la protectora con id: " + data)
    else
      alert("Error al eliminar la protectora");

    })

  }

}