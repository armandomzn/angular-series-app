import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Serie } from 'src/app/interfaces/series-response';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public series: Serie[] = [];
  public seriesSlideshow: Serie[] = [];

  //*SE DISPARA CUANDO UN EVENTO SUCEDE, EN ESTE CASO ES EL SCROLL
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    //*OBTENEMOS LA POSICION ACTUAL DEL SCROLL
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    if (pos > max) {
      if (this.ss.cargando) {
        return;
      }
      //*MANDAMOS A LLAMAR NUEVAMENTE EL SERVICIO PARA OBTENER LA SIGUIENTE PAGINA DE LAS SERIES
      this.ss.getSeries().subscribe((data) => {
        this.series.push(...data);
      });
    }
    // console.log(max);
  }
  constructor(private ss: SeriesService) {}

  ngOnInit(): void {
    this.ss.getSeries().subscribe((data) => {
      this.series = data;
      this.seriesSlideshow = data;
    });
  }

  ngOnDestroy() {
    console.log('EJECUTADO ON DESTROY');

    this.ss.resetSeriesPage();
  }
}
