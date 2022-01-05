import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mensaje } from 'src/app/models/mensaje';
import { ChatService } from 'src/app/shared/chat.service';
import { SesionesService } from 'src/app/shared/sesiones.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  public mensaje: Mensaje;
  public mensajes: Mensaje[];
  public idChat: number;

  constructor(public sesiones: SesionesService, public chatService: ChatService, private router: Router) {
    this.mensaje = new Mensaje(0, 0, "", 0, 0);
  }

  nuevoMensaje(mensaje: string){
    let objetoMensaje = new Mensaje(0, this.chatService.id_chat, mensaje, this.sesiones.id_login1, 1);
    this.chatService.postMensaje(objetoMensaje).subscribe((data: Mensaje) => {
    })
  }

  ngOnInit(): void {
    if(this.sesiones.tipo == 'protectora'){
      this.chatService.getIDChat(1, this.sesiones.id_login1).subscribe((data: any) => {
        this.idChat = data[0].id_chat;
        this.chatService.saveIDChat(this.idChat);
        this.chatService.getMensajes(this.chatService.id_chat).subscribe((data: Mensaje[]) => {
          this.mensajes = data;
        })
      })
    }
    if(this.sesiones.tipo == 'adoptante'){
      this.chatService.getIDChat(this.sesiones.id_login1, 2).subscribe((data: any) => {
        this.idChat = data[0].id_chat;
        this.chatService.saveIDChat(this.idChat);
        this.chatService.getMensajes(this.chatService.id_chat).subscribe((data: Mensaje[]) => {
          this.mensajes = data;
        })
      })
    }
  }
}