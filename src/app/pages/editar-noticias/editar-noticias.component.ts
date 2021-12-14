import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/shared/noticia.service';
import { SesionesService } from 'src/app/shared/sesiones.service';

@Component({
  selector: 'app-editar-noticias',
  templateUrl: './editar-noticias.component.html',
  styleUrls: ['./editar-noticias.component.css']
})
export class EditarNoticiasComponent implements OnInit {

  public noticias: Noticia;

  constructor(private apiService: NoticiaService, private sesiones:SesionesService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    
    
    this.apiService.putNoticia(this.noticias)
    .subscribe((data:string) =>
    {
    
      console.log(data);
      if (data != "-1")
        alert("Se modificado la noticia" + data)
      else
        alert("Error al modificar la noticia");

    })

  }
    eliminarNoticia(id:string)
  {
    this.apiService.deleteNoticia({"id":id})
    .subscribe((data) =>
    {
      console.log(data);
      if (data != "-1")
      alert("Se ha eliminado la noticia " )
    else
      alert("Error al eliminar la noticia");

    })

  }

}
