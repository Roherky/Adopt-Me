import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { Protectora } from 'src/app/models/protectora';
import { Usuario } from 'src/app/models/usuario';
import { SesionesService } from 'src/app/shared/sesiones.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;
  public protectora: Protectora;
  public login: Login;
  public sesion: Login;
  public id_login: number;

  constructor(private loginService: SesionesService,
              private router: Router) {
    this.usuario = new Usuario(0, "", "", "", 0, "", "", "", "", "", "");
    this.protectora = new Protectora(0,"", "", "", "", "", "", "", "");
  }

  hacerLogin(email: string, password: string){
    let object = new Login(0, 0, 0, email, password);
    this.loginService.postLogin(object).subscribe((data: any) => {
      if(data.mensaje == "correcto"){
        this.id_login = data.respuesta[0].id_login;
        this.loginService.saveIDLogin1(this.id_login);
        this.sesion = data.respuesta[0];
        this.loginService.saveData(this.sesion);
        if(this.sesion.id_adoptante != null){
          this.router.navigate(['listadoAnimales']);
        }
        if(this.sesion.id_protectora != null){
          this.router.navigate(['perfilProtectora']);
        }
        alert("Se ha logueado correctamente");
      }
      else {
        alert("Ha ocurrido un error al intentar loguearse, compruebe su correo electrónico y contraseña");
      }
    })
  }

  ngOnInit(): void {
  }

}