import { Component, OnInit } from '@angular/core';
import { FinalFeliz } from 'src/app/models/final-feliz';

@Component({
  selector: 'app-finales-felices',
  templateUrl: './finales-felices.component.html',
  styleUrls: ['./finales-felices.component.css']
})
export class FinalesFelicesComponent implements OnInit {

  public finalFeliz: FinalFeliz;
  public finalesFelices: FinalFeliz[];

  constructor() {
    this.finalFeliz = new FinalFeliz(0, "", "", "", [], 0);
  }

  ngOnInit(): void {
  }

}
