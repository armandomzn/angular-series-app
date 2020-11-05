import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeriesService } from '../../services/series.service';
import { SerieDetails } from '../../interfaces/serie-details';
import { Location } from '@angular/common';
import { combineLatest } from 'rxjs';
import { Cast } from '../../interfaces/cast-response';
import { logging } from 'protractor';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
})
export class SerieComponent implements OnInit {
  public serie: SerieDetails;
  public cast: Cast[] = [];
  public genres: Cast;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ss: SeriesService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;

    combineLatest([
      this.ss.getSerieDetails(id),
      this.ss.getCastDetails(id),
    ]).subscribe(([serie, cast]) => {
      if (!serie) {
        this.router.navigateByUrl('/home');
        return;
      }
      this.serie = serie;
      this.genres = serie.genres;
      console.log(this.genres);

      this.cast = cast.filter((data) => {
        return data.profile_path !== null;
      });
    });
  }
  onRegresar() {
    this.location.back();
  }
}
