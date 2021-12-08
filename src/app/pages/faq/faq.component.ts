import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  public mostrar: Boolean;
  constructor() { 
    this.mostrar=false;
  }
  public ver(){

      this.mostrar=!this.mostrar

    }

  ngOnInit(): void {
  }

}