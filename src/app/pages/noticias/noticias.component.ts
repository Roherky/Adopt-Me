import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/shared/noticia.service';
import { SesionesService } from 'src/app/shared/sesiones.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
 
})
export class NoticiasComponent implements OnInit {
  public noticia: Noticia;
  public noticias: Noticia[];
  
  closeResult = '';
  constructor(private modalService: NgbModal, private apiService: NoticiaService, public sesiones: SesionesService){
    this.noticia = new Noticia(null,"", "", "", "", "", "",null);
  }

  ngOnInit(): void { 


/**if(this.sesion.tipo=="protectora"){
      this.animalServicio.obtenerAnimalesProtectora(this.sesion.id_usuario)
      .subscribe((data:Animal[])=>{
        this.animales=data;
        console.log(this.animales);
      })

    }else{

      this.animalServicio.obtenerAnimales()
      .subscribe((data:Animal[])=>{
        this.animales=data;
        console.log(this.animales);
      })
    } */
    if(this.sesiones.tipo=="protectora"){
      this.apiService.getNoticia(this.sesiones.id_usuario)
      .subscribe((data: Noticia[]) => {
        this.noticias = data;
        console.log("aaaaaaa");
        console.log(this.noticias);
      })
    }else{
      this.apiService.getNoticias()
      .subscribe((data: Noticia[])=>{
        this.noticias = data;
        console.log(this.noticias);
      })
    }

   
}
mostrarDetalle(idNoticias){
  
  this.apiService.obteneridNoticia(idNoticias);

  console.log(idNoticias)
}

  // funcion modal
open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public eliminar(idNoticia: any){
console.log(idNoticia);
    if(idNoticia!=""){
   /// let id=  this.apiService.obteneridNoticia(idNoticia);
      this.apiService.deleteNoticia(idNoticia)
      .subscribe((data:string) =>{

        if (data == "1"){

                  alert("noticia eliminada");
                 
                   this.ngOnInit();
                 
                  }else
                  alert("Error al eliminar la noticia");
               
                })
    }


  // eliminar(idAnimal){
  
  //   console.log(idAnimal);
  //   if(idAnimal!=""){

  //     this.animalServicio.borrarAnimal(idAnimal)
  //     .subscribe((data:string) =>{
  //       console.log(data);
       
     
  //       if (data == "1"){

  //         alert("Animal eliminado");
  //         this.router.navigate(['/listadoAnimales'])

         
  //         }else
  //         alert("Error al eliminar el animal");
       
  //       })
  //   }



  }

}
