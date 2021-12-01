import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetalladoProtectoraComponent } from './pages/animal-detallado-protectora/animal-detallado-protectora.component';
import { AnyadirAnimalesComponent } from './pages/anyadir-animales/anyadir-animales.component';
import { FormularioAnyadirNoticiasComponent } from './pages/formulario-anyadir-noticias/formulario-anyadir-noticias.component';

const routes: Routes = [
  {path: "anyadir-animales", component: AnyadirAnimalesComponent},
  {path: "formulario-anyadir-noticias", component: FormularioAnyadirNoticiasComponent},
  {path: "animal-detallado-protectora", component: AnimalDetalladoProtectoraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
