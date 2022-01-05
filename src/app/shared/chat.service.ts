import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat } from '../models/chat';
import { Mensaje } from '../models/mensaje';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public id: number;
  public id_chat: number;

  constructor(private http: HttpClient) { }

  public getChatsAdoptante(id: number){
    let urlChats = `https://adopt-me2021.herokuapp.com/chat/login/adoptante?id=${id}`;
    return this.http.get(urlChats);
  }

  public getChatsProtectora(id: number){
    let urlChats = `https://adopt-me2021.herokuapp.com/chat/login/protectora?id=${id}`;
    return this.http.get(urlChats);
  }

  public getNombreProtectora(id: number){
    let url = `https://adopt-me2021.herokuapp.com/nombre/protectora?id=${id}`;
    return this.http.get(url);
  }

  public getIDAdoptante(id: number){
    let url = `https://adopt-me2021.herokuapp.com/idlogin/adoptante?id=${id}`;
    return this.http.get(url);
  }

  public getNombreAdoptante(id: number){
    let url = `https://adopt-me2021.herokuapp.com/nombre/adoptante?id=${id}`;
    return this.http.get(url);
  }

  public getMensajes(id: number){
    let urlMensajes = `https://adopt-me2021.herokuapp.com/mensaje?id=${id}`;
    return this.http.get(urlMensajes);
  }

  public getIDChat(id_emisor: number, id_receptor: number){
    let url = `https://adopt-me2021.herokuapp.com/idchat?id_emisor=${id_emisor}&id_receptor=${id_receptor}`;
    return this.http.get(url);
  }

  public postChat(chat: Chat){
    let urlChats = "https://adopt-me2021.herokuapp.com/chat";
    return this.http.post(urlChats, chat);
  }

  public saveIDChat(data: number){
    if(data != null){
      this.id_chat = data;
    }
  }

  public postMensaje(mensaje: Mensaje){
    let urlMensajes = "https://adopt-me2021.herokuapp.com/mensaje";
    return this.http.post(urlMensajes, mensaje);
  }
}
