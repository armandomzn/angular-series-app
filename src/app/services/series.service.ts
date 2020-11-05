import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SeriesResponse, Serie } from '../interfaces/series-response';
import { Observable, of } from 'rxjs';
import { tap, map, timestamp, catchError } from 'rxjs/operators';
import { SerieDetails } from '../interfaces/serie-details';
import { CastResponse } from '../interfaces/cast-response';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private page = 1;
  private numberPages: number;
  public cargando = false;

  constructor(private http: HttpClient) {}

  getSeries(): Observable<Serie[]> {
    if (this.cargando) {
      return of([]);
    }

    this.cargando = true;
    return this.http
      .get<SeriesResponse>(`${this.baseUrl}/tv/on_the_air`, {
        params: this.params,
      })
      .pipe(
        map((data) => {
          return data.results;
        }),
        tap(() => {
          this.condition();
        })
      );
  }

  buscarSerie(serie: string) {
    if (this.cargando) {
      return of([]);
    }
    this.cargando = true;
    const params = { ...this.params, query: serie };
    return this.http
      .get<SeriesResponse>(`${this.baseUrl}/search/tv`, {
        params,
      })
      .pipe(
        map((data) => {
          this.numberPages = data.total_pages;
          return data.results;
        }),
        tap(() => {
          this.condition();
        })
      );
  }

  getSerieDetails(id: string) {
    return this.http
      .get<SerieDetails>(`${this.baseUrl}/tv/${id}`, {
        params: this.params,
      })
      .pipe(
        catchError((err) => {
          return of(null);
        })
      );
  }

  getCastDetails(id: string) {
    return this.http
      .get<CastResponse>(`${this.baseUrl}/tv/${id}/credits`, {
        params: this.params,
      })
      .pipe(
        map((data) => {
          return data.cast;
        }),
        catchError((err) => {
          return of([]);
        })
      );
  }

  get params() {
    return {
      api_key: '6fecf4d6f6cb8b450db5a23427fbd11b',
      language: 'es-ES',
      page: this.page.toString(),
    };
  }

  condition() {
    console.log(this.page);

    if (this.page !== this.numberPages) {
      this.page += 1;
      this.cargando = false;
    }
  }

  resetSeriesPage() {
    this.page = 1;
  }
}
