import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './pages/inicio/inicio.component';
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
import { FaqComponent } from './pages/faq/faq.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatComponent } from './pages/chat/chat.component';
import { EditarPerfilComponent } from './pages/editar-perfil/editar-perfil.component';
import { RecordarContrasenyaComponent } from './pages/recordar-contrasenya/recordar-contrasenya.component';
import { ModificarAnimalComponent } from './pages/modificar-animal/modificar-animal.component';


// Anggular Material in here is
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormularioImagenesComponent } from './pages/formulario-imagenes/formulario-imagenes.component';
import { EditarPerfilProtectoraComponent } from './pages/editar-perfil-protectora/editar-perfil-protectora.component';
import { EditarNoticiasComponent } from './pages/editar-noticias/editar-noticias.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
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
    FaqComponent,
    ChatComponent,
    EditarPerfilComponent,
    RecordarContrasenyaComponent,
    ModificarAnimalComponent,
    FormularioImagenesComponent,
    EditarPerfilProtectoraComponent,
    EditarNoticiasComponent,
    
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    NgxMatFileInputModule,
    MatFormFieldModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }