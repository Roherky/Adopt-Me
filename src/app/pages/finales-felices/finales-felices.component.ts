import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FinalFeliz } from 'src/app/models/final-feliz';
import { FinalFelizService } from 'src/app/shared/final-feliz.service';

@Component({
  selector: 'app-finales-felices',
  templateUrl: './finales-felices.component.html',
  styleUrls: ['./finales-felices.component.css']
})
export class FinalesFelicesComponent implements OnInit {

  public finalFeliz: FinalFeliz;
  public finalesFelices: FinalFeliz[];
  closeResult = '';

  constructor(private finalFelizService: FinalFelizService, private modalService: NgbModal) {
    this.finalFeliz = new FinalFeliz(0, "", "", "", "", 0);
  }

  abrirModal(content: any){
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

  ngOnInit(): void {
    this.finalFelizService.getFinalesFelices().subscribe((data: FinalFeliz[]) => {
      this.finalesFelices = data;
      console.log(this.finalesFelices);
    })
  }

}
