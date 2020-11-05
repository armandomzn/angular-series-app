import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Cast } from '../../interfaces/cast-response';
import { Swiper } from 'swiper';
@Component({
  selector: 'app-cast-slide-show',
  templateUrl: './cast-slide-show.component.html',
  styleUrls: ['./cast-slide-show.component.css'],
})
export class CastSlideShowComponent implements OnInit, AfterViewInit {
  @Input() cast: Cast[];
  private mySwiper: Swiper;
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 4.5,
      freeMode: true,
      spaceBetween: 15,
    });
  }
}
