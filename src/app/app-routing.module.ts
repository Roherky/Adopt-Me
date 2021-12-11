import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetalladoProtectoraComponent } from './pages/animal-detallado-protectora/animal-detallado-protectora.component';
import { AnyadirAnimalesComponent } from './pages/anyadir-animales/anyadir-animales.component';
import { FormularioAnyadirNoticiasComponent } from './pages/formulario-anyadir-noticias/formulario-anyadir-noticias.component';
import { FooterComponent } from './pages/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FinalesFelicesComponent } from './pages/finales-felices/finales-felices.component';
import { FormularioFinalesFelicesComponent } from './pages/formulario-finales-felices/formulario-finales-felices.component';
import { ListaAnimalesComponent } from './pages/lista-animales/lista-animales.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { PerfilAnimalComponent } from './pages/perfil-animal/perfil-animal.component';
import { PerfilProtectoraComponent } from './pages/perfil-protectora/perfil-protectora.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
import { ChatComponent } from './pages/chat/chat.component';
import { EditarPerfilComponent } from './pages/editar-perfil/editar-perfil.component';
import { RecordarContrasenyaComponent } from './pages/recordar-contrasenya/recordar-contrasenya.component';
import { ModificarAnimalComponent } from './pages/modificar-animal/modificar-animal.component';
import { FormularioImagenesComponent } from './pages/formulario-imagenes/formulario-imagenes.component';
import { EditarPerfilProtectoraComponent } from './pages/editar-perfil-protectora/editar-perfil-protectora.component';
import { EditarNoticiasComponent } from './pages/editar-noticias/editar-noticias.component';


const routes: Routes = [
  {path: "inicio", component: InicioComponent},
  {path: "footer",component:FooterComponent},
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  {path: "contacto", component: ContactoComponent},
  {path: "animalDetalleProtectora", component: AnimalDetalladoProtectoraComponent},
  {path: "añadirAnimal", component: AnyadirAnimalesComponent},
  {path: "modificarAnimal", component: ModificarAnimalComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "faq", component: FaqComponent},
  {path: "finalesFelices", component: FinalesFelicesComponent},
  {path: "añadirNoticias", component: FormularioAnyadirNoticiasComponent},
  {path: "añadirFinalesFelices", component: FormularioFinalesFelicesComponent},
  {path: "listadoAnimales", component: ListaAnimalesComponent},
  {path: "noticias", component: NoticiasComponent},
  {path: "perfilAnimal", component: PerfilAnimalComponent},
  {path: "perfilProtectora", component: PerfilProtectoraComponent},
  {path: "perfilUsuario", component: PerfilUsuarioComponent},
  {path: "chat", component: ChatComponent},
  {path: "editarPerfil", component: EditarPerfilComponent},
  {path: "recordarContraseña", component: RecordarContrasenyaComponent},
  {path: "modificarAnimal", component: ModificarAnimalComponent},
  {path: "formularioImagenes", component: FormularioImagenesComponent},
  {path: "editarPerfilProtectora", component: EditarPerfilProtectoraComponent},
  {path:"editarNoticias", component:EditarNoticiasComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }