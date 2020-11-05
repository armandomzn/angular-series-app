import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  transform(imagen: string): string {
    //*https://image.tmdb.org/t/p/original{{ serie.backdrop_path }}
    if (imagen) {
      return `https://image.tmdb.org/t/p/original${imagen}`;
    }
    return './assets/no-image.png';
  }
}
