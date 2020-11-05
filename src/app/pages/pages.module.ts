import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SerieComponent } from './serie/serie.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [HomeComponent, SerieComponent, BuscarComponent],
  imports: [CommonModule, ComponentsModule, PipesModule, RatingModule],
})
export class PagesModule {}
