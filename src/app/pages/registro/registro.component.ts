import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Protectora } from 'src/app/models/protectora';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Router } from '@angular/router';
import { ProtectoraService } from 'src/app/shared/protectora.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public esProtectora: boolean;
  public usuario: Usuario;
  public protectora: Protectora;

  constructor(private servicioAdoptante: UsuarioService, private router: Router, private servicioProtectora: ProtectoraService) {

    this.esProtectora = false;
    this.usuario = new Usuario(0, "", "", "", 0, "", "", "", "", "", "");
    this.protectora = new Protectora(0, "", "", "", "", "", "", "", "");
  }

  usuarioAdoptante(){
    this.esProtectora = false;
  }

  usuarioProtectora(){
    this.esProtectora = true;
  }

  onSubmit(form: NgForm){
    if(this.usuario.nombre == ''){
      this.servicioProtectora.postProtectora(this.protectora).subscribe((data: any) => {
        if(data.usuario == "protectora"){
          alert("Se ha registrado satisfactoriamente")
          this.router.navigate(['login']);
        }else{
          alert("Ha ocurrido un error al procesar su solicitud")
        }
      })
    }
    else {
        this.servicioAdoptante.postAdoptante(this.usuario).subscribe((data: any) => {
        if(data[12] == "a"){
          alert("Se ha registrado satisfactoriamente");
          this.router.navigate(['login']);
        }
        else alert("Ha ocurrido un error al procesar su solicitud");
      })
    }
  }

  // confirmarPassword(password, confirmPassword){
  //   console.log(password);
  //   console.log(confirmPassword);
  //   if(password == confirmPassword){
  //     return true;
  //   }
  //   else return false;
  // }

  ngOnInit(): void {
  }

}
