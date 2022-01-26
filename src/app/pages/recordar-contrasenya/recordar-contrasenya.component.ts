import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { SesionesService } from 'src/app/shared/sesiones.service';

@Component({
  selector: 'app-recordar-contrasenya',
  templateUrl: './recordar-contrasenya.component.html',
  styleUrls: ['./recordar-contrasenya.component.css']
})
export class RecordarContrasenyaComponent implements OnInit {

  constructor(public sesiones: SesionesService, private router: Router) { }

  public actualizarPass(email: string, newPassword: string){
    let newLogin = new Login(this.sesiones.id_login1, this.sesiones.id_usuario, this.sesiones.id_usuario, email, newPassword);
    for(let propiedad in newLogin){

      if(newLogin[propiedad] == ""){
        newLogin[propiedad] = null;
      }     
    }
    this.sesiones.updatePassword(newLogin).subscribe((data: any) => {
      if(data.affectedRows == 1){
        alert("Se ha cambiado la contraseña correctamente");
        this.router.navigate(['login']);
      }
      else{
        alert("Ha ocurrido un error al procesar su solicitud");
      }
    })
  }

  ngOnInit(): void {
  }

}
