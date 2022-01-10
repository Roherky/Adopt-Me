import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from 'src/app/models/animal';
import { Chat } from 'src/app/models/chat';
import { Imagenes } from 'src/app/models/imagenes';
import { Mensaje } from 'src/app/models/mensaje';
import { AnimalService } from 'src/app/shared/animal.service';
import { ChatService } from 'src/app/shared/chat.service';
import { ImagenesService } from 'src/app/shared/imagenes.service';
import { SesionesService } from 'src/app/shared/sesiones.service';
@Component({
  selector: 'app-perfil-animal',
  templateUrl: './perfil-animal.component.html',
  styleUrls: ['./perfil-animal.component.css']
})
export class PerfilAnimalComponent implements OnInit {

  public animal: Animal;
  public id: number;
  public imagenes: Imagenes[];
  public IDLogin: number;
  public IDLoginProtectora: number;
  
  constructor(private animalServicio: AnimalService,
              public sesiones: SesionesService,
              private imagenServicio: ImagenesService,
              public chatService: ChatService,
              private router: Router) {
   this.animal = new Animal(null, "", "", "", "", "", "", "", "", null, "");
  }

  crearChat(){
    let chat = new Chat(0, this.sesiones.id_login1, this.IDLoginProtectora);
    this.chatService.postChat(chat).subscribe((data: Chat) => {
      this.router.navigate(['chat']);
    })
  }

  ngOnInit(): void {
   this.id = this.animalServicio.idAnimal;
   this.animalServicio.obtenerId(this.id).subscribe((data: Animal[]) => {
    this.animal = data[0];
    })
    this.imagenServicio.obtenerImagen(this.id).subscribe((data: Imagenes[]) => {
      this.imagenes = data;
    })
    this.sesiones.getIDLogin2(this.id).subscribe((data: any) => {
      this.IDLogin = data[0].id_protectora;
      this.sesiones.saveIDLogin2(this.IDLogin);
      this.sesiones.getIDLogin(this.sesiones.id_login2).subscribe((data: any) => {
        this.IDLoginProtectora = data[0].id_login;
      })
    })
  }
}