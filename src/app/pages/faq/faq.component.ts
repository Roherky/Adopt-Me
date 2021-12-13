import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  public mostrar: Boolean;
  public pregunta: string;

  constructor() { 
    this.mostrar=false;
  }
  public ver(respuesta:string){
    this.pregunta=respuesta;

      this.mostrar=!this.mostrar

    }

  ngOnInit(): void {
  }

}