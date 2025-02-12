import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  imports: [NgIf, NgFor]
})
export class SliderComponent implements OnInit, OnDestroy {
  movies = [
    { title: 'Joker 2', image: 'assets/Joker2.jpeg' },
    { title: 'Dune: Parte Dos', image: 'assets/Dune2.jpg' },
    { title: 'Deadpool 3', image: 'assets/Deadpool3.jpg' },
  ];

  currentIndex = 0;
  isFading = false;
  private intervalId: any;
  isBrowser: boolean; // Para verificar si estamos en el navegador

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    if (this.isBrowser) {
      this.stopAutoSlide(); // ✅ Primero detiene cualquier temporizador previo
      this.intervalId = setInterval(() => {
        this.fadeToNextSlide();
      }, 4000);
    }
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  fadeToNextSlide() {
    this.isFading = true;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.movies.length;
      this.isFading = false;
    }, 500);
  }

  fadeToPrevSlide() {
    this.isFading = true;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex - 1 + this.movies.length) % this.movies.length;
      this.isFading = false;
    }, 500);
  }

  // ✅ Cuando el usuario cambia manualmente, reinicia el temporizador
  manualNext() {
    this.stopAutoSlide();
    this.fadeToNextSlide();
    this.startAutoSlide();
  }

  manualPrev() {
    this.stopAutoSlide();
    this.fadeToPrevSlide();
    this.startAutoSlide();
  }
}
