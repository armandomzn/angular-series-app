import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SerieComponent } from './pages/serie/serie.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'serie/:id', component: SerieComponent },
  { path: 'buscar/:texto', component: BuscarComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
