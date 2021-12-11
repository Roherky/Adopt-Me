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

  constructor(private loginService: SesionesService, private router: Router) {
    this.usuario = new Usuario(0, "", "", "", 0, "", "", "", "", "", "");
    this.protectora = new Protectora(0,"", "", "", "", "", "", "", "");
  }

  hacerLogin(email: string, password: string){
    console.log(email);
    console.log(password);
    let object = new Login(0, 0, 0, email, password);
    this.loginService.postLogin(object).subscribe((data: any) => {
      console.log(data);
      // if(data != "-1") console.log("Se ha creado el usuario con ID: " + data + " satisfactoriamente");
      // else console.log("Ha ocurrido un error al procesar su solicitud");      
      if(data != "-1"){
        localStorage.setItem('token', data);
        this.router.navigate(['inicio']);
        alert("Correctamente");
      }
      else {
        alert("Error");
      }

    })
  }

  ngOnInit(): void {
  }

}