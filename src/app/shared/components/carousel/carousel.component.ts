import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @ViewChild('carouselTrack', { static: false }) carouselTrack!: ElementRef;
  currentIndex = 0;

  carouselItems = [
    { id: 1, title: 'Item 1', imageUrl: '../../../../assets/icon/image (3).svg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
    { id: 2, title: 'Item 2', imageUrl: '../../../../assets/icon/image (4).svg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
    { id: 3, title: 'Item 3', imageUrl: '../../../../assets/icon/image (5).svg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
    { id: 4, title: 'Item 4', imageUrl: '../../../../assets/icon/image (6).svg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.' },
    { id: 5, title: 'Item 5', imageUrl: '../../../../assets/icon/image (5).svg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },

  ];

  getShortDescription(description: string): string {
    return description.length > 300 ? description.substring(0, 300) + '...' : description;
  }

  nextSlide(): void {
    const track = this.carouselTrack.nativeElement;
    const totalItems = track.children.length;
    const visibleItems = 4;
    const maxIndex = totalItems - visibleItems;

    this.currentIndex = this.currentIndex < maxIndex ? this.currentIndex + 1 : 0;
    track.style.transform = `translateX(-${this.currentIndex * (100 / visibleItems)}%)`;
  }

  prevSlide(): void {
    const track = this.carouselTrack.nativeElement;
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : track.children.length - 4;
    track.style.transform = `translateX(-${this.currentIndex * (100 / 4)}%)`;
  }
}
