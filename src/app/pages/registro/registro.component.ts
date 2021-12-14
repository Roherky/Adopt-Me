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
    this.usuario = new Usuario(0, "", "", "", 0, "", "", "", "", "","");
    this.protectora = new Protectora(0,"", "", "", "", "", "","","");
  }

  usuarioAdoptante(){
    this.esProtectora = false;
  }

  usuarioProtectora(){
    this.esProtectora = true;
  }

  onSubmit(form: NgForm){
    console.log(this.protectora);
    console.log(form);
    console.log(this.usuario);
    if(this.usuario.nombre == ''){
      console.log('Se ha registrado una protectora')
      this.servicioProtectora.postProtectora(this.protectora).subscribe((data:any)=>{
        console.log(data);
        if(data !="-1"){
          console.log("Se ha guardado la protectora correctamente")
          this.router.navigate(['dashboard']);
        }else{
          console.log("Ha ocurrido un error al procesar su solicitud")
        }
      })
      /// Hacer la post protectora  y envias this.protectora si no hace lo contrario
    }else{
        this.servicioAdoptante.postAdoptante(this.usuario).subscribe((data: any) => {
        console.log(data);
        // this.router.navigate(['loguin']);
        if(data != "-1"){
          console.log("Se ha creado el usuario con ID: " + data + " satisfactoriamente");
          this.router.navigate(['listadoAnimales']);
        }
        else console.log("Ha ocurrido un error al procesar su solicitud");
      })
    }

  }

  ngOnInit(): void {
  }

}
