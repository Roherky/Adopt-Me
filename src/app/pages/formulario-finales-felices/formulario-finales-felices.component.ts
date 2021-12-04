import { Component, OnInit } from '@angular/core';
import { FinalFeliz } from 'src/app/models/final-feliz';

@Component({
  selector: 'app-formulario-finales-felices',
  templateUrl: './formulario-finales-felices.component.html',
  styleUrls: ['./formulario-finales-felices.component.css']
})
export class FormularioFinalesFelicesComponent implements OnInit {

  public finalFeliz: FinalFeliz;

  constructor() {
    this.finalFeliz = new FinalFeliz(0, "", "", "", [], 0);
  }

  ngOnInit(): void {
  }

}
