import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetalladoProtectoraComponent } from './pages/animal-detallado-protectora/animal-detallado-protectora.component';
import { AnyadirAnimalesComponent } from './pages/anyadir-animales/anyadir-animales.component';
<<<<<<< HEAD
import { FormularioAnyadirNoticiasComponent } from './pages/formulario-anyadir-noticias/formulario-anyadir-noticias.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'Animales',component:AnimalDetalladoProtectoraComponent}
=======
import { ContactoComponent } from './pages/contacto/contacto.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FinalesFelicesComponent } from './pages/finales-felices/finales-felices.component';
import { FormularioAnyadirNoticiasComponent } from './pages/formulario-anyadir-noticias/formulario-anyadir-noticias.component';
import { FormularioFinalesFelicesComponent } from './pages/formulario-finales-felices/formulario-finales-felices.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaAnimalesComponent } from './pages/lista-animales/lista-animales.component';
import { LoginComponent } from './pages/login/login.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { PerfilAnimalComponent } from './pages/perfil-animal/perfil-animal.component';
import { PerfilProtectoraComponent } from './pages/perfil-protectora/perfil-protectora.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path: "inicio", component: InicioComponent},
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  {path: "contacto", component: ContactoComponent},
  {path: "editarAnimal", component: AnimalDetalladoProtectoraComponent},
  {path: "añadirAnimal", component: AnyadirAnimalesComponent},
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
  {path: "quienesSomos", component: QuienesSomosComponent},
>>>>>>> inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
