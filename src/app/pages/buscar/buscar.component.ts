import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from '../../services/series.service';
import { Serie } from '../../interfaces/series-response';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit {
  public series: Serie[];
  public serieName = '';

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    if (pos > max) {
      if (this.ss.cargando) {
        return;
      }
    }
    this.ss.buscarSerie(this.serieName).subscribe((data) => {
      this.series.push(...data);
    });
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private ss: SeriesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.serieName = data.texto;
      this.ss.buscarSerie(data.texto).subscribe((data: Serie[]) => {
        this.series = data;
      });
    });
  }
}
