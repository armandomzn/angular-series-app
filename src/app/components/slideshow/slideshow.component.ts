import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Serie } from '../../interfaces/series-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input() series: Serie[];
  private mySwiper: Swiper;

  constructor() {

  }

  ngOnInit(): void {
    // console.log(this.series);
  }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
    });

  }
  nextSlide() {
    return this.mySwiper.slideNext(500);
  }
  prevSlide() {
    return this.mySwiper.slidePrev(500);
  }
}
