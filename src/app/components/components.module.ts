import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SeriesPosterGridComponent } from './series-poster-grid/series-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';
import { CastSlideShowComponent } from './cast-slide-show/cast-slide-show.component';



@NgModule({
  declarations: [NavbarComponent, SlideshowComponent, SeriesPosterGridComponent, CastSlideShowComponent],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ],
  exports:[
    NavbarComponent,
    SlideshowComponent,
    SeriesPosterGridComponent,
    CastSlideShowComponent
  ]
})
export class ComponentsModule { }
