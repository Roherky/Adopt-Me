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
  public idReceptor: number;


  constructor(private http: HttpClient) { }

  public getChatsProtectora(id: number){
    let urlChats = `https://adopt-me2021.herokuapp.com/chats/protectora?id=${id}`;
    return this.http.get(urlChats);
  }

  public getChatsAdoptante(id: number){
    let urlChats = `https://adopt-me2021.herokuapp.com/chats/adoptante?id=${id}`;
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

  public getIDChat(id_login1: number, id_login2: number){
    let url = `https://adopt-me2021.herokuapp.com/idchat?id_login1=${id_login1}&id_login2=${id_login2}`;
    return this.http.get(url);
  }

  public getIDReceptor(id: number){
    let url = `https://adopt-me2021.herokuapp.com/idreceptor?id=${id}`;
    return this.http.get(url);
  }

  public saveIDReceptor(id: number){
    if(id != null){
      this.idReceptor = id;
    }
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
