import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService} from 'src/app/shared/noticia.service';
import { SesionesService } from 'src/app/shared/sesiones.service';

@Component({
  selector: 'app-formulario-anyadir-noticias',
  templateUrl: './formulario-anyadir-noticias.component.html',
  styleUrls: ['./formulario-anyadir-noticias.component.css']
})
export class FormularioAnyadirNoticiasComponent implements OnInit {

  public noticia: Noticia

  constructor(private apiService: NoticiaService, private sesiones: SesionesService, private router:Router) { 
    this.noticia = new Noticia(null,"", "", "", "", "", "", null);
  }

  onSubmit(form: NgForm){
    this.noticia.id_Protectora=this.sesiones.id_usuario;
    this.apiService.postNoticia(this.noticia)
    .subscribe((data:string) => {
      
      if (data != "-1")
      {
        // alert("Se ha insertado la noticia correctamente");
        this.router.navigate(['/noticias'])
         
      }  
      else
        alert("Ha ocurrido un error al insertar la noticia");
    })
  }

  ngOnInit(): void {
  }
}