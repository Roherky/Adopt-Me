import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService} from 'src/app/shared/noticia.service';
import { SesionesService } from 'src/app/shared/sesiones.service';

@Component({
  selector: 'app-formulario-anyadir-noticias',
  templateUrl: './formulario-anyadir-noticias.component.html',
  styleUrls: ['./formulario-anyadir-noticias.component.css']
})
export class FormularioAnyadirNoticiasComponent implements OnInit {

  public noticia:Noticia

  constructor(private apiService: NoticiaService, private sesiones:SesionesService) { 
    this.noticia=new Noticia(null,"", "", "", "", "", "",null);
    
  }


  onSubmit(form: NgForm){
    this.noticia.id_Protectora=this.sesiones.id_usuario;
    this.apiService.postNoticia(this.noticia)
    .subscribe((data:string) =>
    {
    
      console.log(data);
      if (data != "-1")
      {
        alert("Se ha insertado la noticia con id: " + data);
        
      }  
      else
        alert("Error al insertar la noticia");

    })

  }

  ngOnInit(): void {
  }

}