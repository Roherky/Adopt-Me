import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
  public id:number;

  constructor(private apiService: NoticiaService, private sesiones: SesionesService, private router:Router) { }

  ngOnInit(): void {
  }


  editarNoticia(titular: string, categoria: string, prioridad: string, fecha_publicacion:string,  imagen:string, descripcion:string){
    this.id= this.apiService.idNoticia;
    console.log(this.id)
 let noticias=new Noticia(this.id, titular, categoria, prioridad,  fecha_publicacion, descripcion, imagen,  this.sesiones.id_usuario)
 for(let propiedad in noticias){
         if(noticias[propiedad]==""){
           noticias[propiedad]=null
         }
     }

     this.apiService.putNoticia(noticias)
    .subscribe((data:string) =>
    {
    
      console.log(data);
      if (data != "-1"){
        alert("Se modificado la noticia" + data);
        this.router.navigate(['/noticias'])
      }
        
      else
        alert("Error al modificar la noticia");

    })  
  } 

  eliminar(idNoticia){
    idNoticia=this.apiService.idNoticia;
    console.log(idNoticia);
    if(idNoticia!=""){
      this.apiService.deleteNoticia(idNoticia)
      .subscribe((data:string) =>{
        console.log(data)
        if (data == "1"){

          alert("Noticia eliminada");
          }
        else
          alert("Error al eliminar la noticia");
        })
    }



  }
    

 
  //   eliminarNoticia(idNoticia){
  //  this.id= this.apiService.idNoticia; 
   
  //   this.apiService.deleteNoticia({"id":id})
  //   .subscribe((data) =>
  //   {
  //     console.log(data);
  //     if (data != "-1")
  //     alert("Se ha eliminado la noticia " )
  //   else
  //     alert("Error al eliminar la noticia");

  //   })
  // }
}
   


