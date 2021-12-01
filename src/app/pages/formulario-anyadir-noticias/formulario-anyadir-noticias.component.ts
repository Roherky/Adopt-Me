import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Noticia } from 'src/app/models/noticia';

@Component({
  selector: 'app-formulario-anyadir-noticias',
  templateUrl: './formulario-anyadir-noticias.component.html',
  styleUrls: ['./formulario-anyadir-noticias.component.css']
})
export class FormularioAnyadirNoticiasComponent implements OnInit {

  public noticia:Noticia

  constructor() { 
    this.noticia=new Noticia("", "", "", "", "", "", "");
  }

  onSubmit(form: NgForm){
    console.log(this.noticia);
  }

  ngOnInit(): void {
  }

}
