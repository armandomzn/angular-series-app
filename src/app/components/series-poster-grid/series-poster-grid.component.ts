import { Component, OnInit, Input } from '@angular/core';
import { Serie } from '../../interfaces/series-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series-poster-grid',
  templateUrl: './series-poster-grid.component.html',
  styleUrls: ['./series-poster-grid.component.css'],
})
export class SeriesPosterGridComponent implements OnInit {
  @Input() series: Serie[];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSerieClick(serie: Serie) {
    this.router.navigate(['/serie', serie.id]);
  }
}
