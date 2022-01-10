import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { Mensaje } from 'src/app/models/mensaje';
import { ChatService } from 'src/app/shared/chat.service';
import { SesionesService } from 'src/app/shared/sesiones.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public chat: Chat;
  public datosChat: any[];
  public mensaje: Mensaje;
  public mensajes: Mensaje[];
  public muestraMensajes: boolean;
  public idChat: number;
  public idEmisor: number;
  public idReceptor: number;

  constructor(public sesiones: SesionesService, public chatService: ChatService) {
    this.chat = new Chat(0, 0, 0);
    this.datosChat = [];
    this.muestraMensajes = false;
  }

  mostrarMensajes(id: number){
    this.muestraMensajes = true;
    this.chatService.getMensajes(id).subscribe((data: any) => {
      this.mensajes = data;
      this.idChat = data[0].id_chat;
      this.idEmisor = data[0].id_emisor;
      this.idReceptor = data[0].id_receptor;
    })
  }

  nuevoMensaje(mensaje: string){
    if(this.sesiones.tipo == 'adoptante'){
      let objetoMensaje = new Mensaje(0, this.idChat, mensaje, this.idEmisor, this.idReceptor);
    this.chatService.postMensaje(objetoMensaje).subscribe((data: Mensaje) => { })
    }

    if(this.sesiones.tipo == 'protectora'){
      let objetoMensaje = new Mensaje(0, this.idChat, mensaje, this.idReceptor, this.idEmisor);
    this.chatService.postMensaje(objetoMensaje).subscribe((data: Mensaje) => { })
    }
  }

  ngOnInit(): void {
    if(this.sesiones.tipo == 'adoptante'){
      this.chatService.getChatsAdoptante(this.sesiones.id_login1).subscribe((data: any) => {
        this.datosChat = data;
      })
      this.chatService.getIDReceptor(this.sesiones.id_login1).subscribe((data: any) => {
        let datos = data;
        for(let indice of datos){
          this.idReceptor = indice.id_receptor;
          console.log(this.idReceptor);
          this.chatService.saveIDReceptor(this.idReceptor);
          this.idChat = indice.id_chat;
          console.log(this.idChat);
          this.chatService.saveIDChat(this.idChat);
          this.chatService.getMensajes(this.chatService.id_chat).subscribe((data: Mensaje[]) => {
            this.mensajes = data;
          })
        }
      })
    }
    if(this.sesiones.tipo == 'protectora'){
      this.chatService.getChatsProtectora(this.sesiones.id_login1).subscribe((data: any) => {
        this.datosChat = data;
        console.log(this.datosChat);
      })
      this.chatService.getIDReceptor(this.sesiones.id_login1).subscribe((data: any) => {
        console.log(data);
        this.idReceptor = data[0].id_receptor;
        console.log(data);
        this.chatService.saveIDReceptor(this.idReceptor);
        console.log(this.chatService.idReceptor);
        this.chatService.getIDChat(this.chatService.idReceptor, this.sesiones.id_login1).subscribe((data: any) => {
          this.idChat = data[0].id_chat;
          console.log(data);
          this.chatService.saveIDChat(this.idChat);
          this.chatService.getMensajes(this.chatService.id_chat).subscribe((data: Mensaje[]) => {
            this.mensajes = data;
            console.log(this.mensajes)
          })
        })
      })
    }
  }
}
