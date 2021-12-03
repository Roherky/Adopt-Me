import { Component, OnInit } from '@angular/core';
import { Donacion } from 'src/app/models/donacion';


@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent implements OnInit {

 public donaciones:Donacion[];
 public donacionesFiltradas:Donacion[];
  constructor() { 

   
this.donacionesFiltradas=[];
    this.donaciones=[
      new Donacion("Esther", "02/12/2021", "Diciembre 01 2021", "Diciembre 30 2021", 120, "Recibido"),
      new Donacion("Carlos", "02/12/2021", "Diciembre 01 2021", "Diciembre 30 2021", 120, "Pendiente"),
      new Donacion("Ana", "11/10/2021", "Diciembre 01 2021", "Diciembre 30 2021", 120, "No recibido"),
   
    ]
  }

  filtrar(filtrado: string){

    let pos=0;
    for(let i=0;i<this.donaciones.length;i++){

      if(this.donaciones[i].fecha==filtrado){
        pos=i;
        this.donacionesFiltradas.push(this.donaciones[pos]);
      }
    }

   
    console.log(this.donacionesFiltradas)

  }


  ngOnInit(): void {
  }

}
