import { Injectable } from '@angular/core';
import { SesionesService } from './sesiones.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public sesiones: SesionesService) { }

  public url: "https://adopt-me2021.herokuapp.com/chat";

  getChat(id_chat: number, id_login1: number, id_login2: number){
   
  }
}
