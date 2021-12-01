import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeaderComponent } from './pages/header/header.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormularioFinalesFelicesComponent } from './pages/formulario-finales-felices/formulario-finales-felices.component';
import { FinalesFelicesComponent } from './pages/finales-felices/finales-felices.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AnimalDetalladoProtectoraComponent } from './pages/animal-detallado-protectora/animal-detallado-protectora.component';
import { AnyadirAnimalesComponent } from './pages/anyadir-animales/anyadir-animales.component';
import { FormularioAnyadirNoticiasComponent } from './pages/formulario-anyadir-noticias/formulario-anyadir-noticias.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
import { PerfilProtectoraComponent } from './pages/perfil-protectora/perfil-protectora.component';
import { PerfilAnimalComponent } from './pages/perfil-animal/perfil-animal.component';
import { ListaAnimalesComponent } from './pages/lista-animales/lista-animales.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { FaqComponent } from './pages/faq/faq.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    DashboardComponent,
    FormularioFinalesFelicesComponent,
    FinalesFelicesComponent,
    ContactoComponent,
    AnimalDetalladoProtectoraComponent,
    AnyadirAnimalesComponent,
    FormularioAnyadirNoticiasComponent,
    PerfilUsuarioComponent,
    PerfilProtectoraComponent,
    PerfilAnimalComponent,
    ListaAnimalesComponent,
    NoticiasComponent,
    QuienesSomosComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
