import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetalladoProtectoraComponent } from './pages/animal-detallado-protectora/animal-detallado-protectora.component';
import { AnyadirAnimalesComponent } from './pages/anyadir-animales/anyadir-animales.component';
import { FormularioAnyadirNoticiasComponent } from './pages/formulario-anyadir-noticias/formulario-anyadir-noticias.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'Animales',component:AnimalDetalladoProtectoraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
