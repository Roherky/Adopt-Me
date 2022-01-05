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
  public chatsAdoptante: any[];
  public chatsProtectora: any[];
  public nombreProtectora: any;
  public nombreAdoptante: any;

  constructor(public sesiones: SesionesService, public chatService: ChatService) {
    this.chat = new Chat(0, 0, 0);
    this.nombreProtectora = [];
    this.nombreAdoptante = [];
  }

  mostrarChat(idChat: number){
    this.chatService.saveIDChat(idChat);
  }

  ngOnInit(): void {
    this.sesiones.getIDLogin2(this.sesiones.id_login2)
    this.chatService.getChatsAdoptante(this.sesiones.id_login1).subscribe((data: Chat[]) => {
      this.chatsAdoptante = data;
      for(let nombre of this.chatsAdoptante){
        this.chatService.getNombreProtectora(nombre.id_login2).subscribe((data: any) => {
          this.nombreProtectora.push(data[0].nombre);
        })
      }
    })
    this.chatService.getChatsProtectora(this.sesiones.id_login1).subscribe((data: Chat[]) => {
      this.chatsProtectora = data;
      for(let nombre of this.chatsProtectora){
        this.chatService.getNombreAdoptante(nombre.id_login).subscribe((data: any) => {
          this.nombreAdoptante.push(data[0].nombre + " " + data[0].apellidos);
        })
      }
    })
  }
}
