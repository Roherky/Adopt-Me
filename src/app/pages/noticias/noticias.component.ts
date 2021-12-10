import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/shared/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
 
})
export class NoticiasComponent implements OnInit {
  public noticia: Noticia;
  public noticias: Noticia[];
  
  closeResult = '';
  constructor(private modalService: NgbModal, private apiService: NoticiaService){
    this.noticia = new Noticia("Loteria de Navidad", "urgente", "importante", "12-12-2022", "Ultimos dias para conseguir la loteria de navidad para ayudar a la protectora", "",1);
  }
  
  ngOnInit(): void {
  }
// mostrar noticias
public getNoticias(id: any){
  if(id != ""){
    this.apiService.getNoticia(id).subscribe((data: any) => {
      this.noticias = [data[0]];
      console.log(data);
    })
  }
  else {
    this.apiService.getNoticias().subscribe((data: any) => {
      this.noticias = data;
      console.log(this.noticias);
    })
  }
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
}
