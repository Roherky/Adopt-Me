import { Component, OnInit } from '@angular/core';
import { Protectora } from 'src/app/models/protectora';
@Component({
  selector: 'app-perfil-protectora',
  templateUrl: './perfil-protectora.component.html',
  styleUrls: ['./perfil-protectora.component.css']
})
export class PerfilProtectoraComponent implements OnInit {

  public protectora: Protectora
  constructor() { 
    this.protectora = new Protectora("Abrazo Peludo", "C/ Las Rosas 22", "", "abrazo-peludo@gmail.com", "","910.000.000", [], [])
  }

  ngOnInit(): void {
  }


}
