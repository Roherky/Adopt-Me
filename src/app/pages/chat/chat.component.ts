import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  closeResult = '';

  constructor(public sesiones: SesionesService,
              public chatService: ChatService,
              private modalService: NgbModal,
              private router: Router) {
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
      this.mensajes.push(objetoMensaje);
      this.chatService.postMensaje(objetoMensaje).subscribe((data: Mensaje) => { })
    }

    if(this.sesiones.tipo == 'protectora'){
      let objetoMensaje = new Mensaje(0, this.idChat, mensaje, this.idReceptor, this.idEmisor);
      this.mensajes.push(objetoMensaje);
      this.chatService.postMensaje(objetoMensaje).subscribe((data: Mensaje) => { })
    }
  }

  borrarChat(){
    let id = this.idChat;
    this.chatService.deleteChat(id).subscribe((data: any) => {
      this.router.navigate(['listadoAnimales']);
    })
  }

  abrirModal(content: any){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
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
        
          this.chatService.saveIDReceptor(this.idReceptor);
          this.idChat = indice.id_chat;
          
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
        
      })
      this.chatService.getIDReceptor(this.sesiones.id_login1).subscribe((data: any) => {
       
        this.idReceptor = data[0].id_receptor;
       
        this.chatService.saveIDReceptor(this.idReceptor);
       
        this.chatService.getIDChat(this.chatService.idReceptor, this.sesiones.id_login1).subscribe((data: any) => {
          this.idChat = data[0].id_chat;
          
          this.chatService.saveIDChat(this.idChat);
          this.chatService.getMensajes(this.chatService.id_chat).subscribe((data: Mensaje[]) => {
            this.mensajes = data;
            
          })
        })
      })
    }
  }
}
