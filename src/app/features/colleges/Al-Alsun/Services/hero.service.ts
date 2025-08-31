import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeroSlide } from '../model/hero-slide.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private slides: HeroSlide[] = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg',
      alt: 'صورة المكتبة 1',
      title: 'كلية الألسن - جامعة الأقصر',
      subtitle: 'التميز والريادة في دراسة اللغات...',
      description: 'كلية رائدة في اللغات والترجمة، تعد خريجين مؤهلين لسوق العمل، مع دعم البحث العلمي وخدمة المجتمع تماشياً مع رؤية مصر 2030.',
      showButton: true
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
      alt: 'صورة المكتبة 2',
      title: 'اكتشف برامجنا الأكاديمية',
      subtitle: 'تجارب تعليمية مبتكرة...',
      showButton: false
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
      alt: 'صورة المكتبة 3',
      title: 'انضم إلى مجتمعنا البحثي',
      subtitle: 'اكتشافات رائدة في علم اللغة...',
      showButton: false
    }
  ];

  getSlides(): Observable<HeroSlide[]> {
    return of(this.slides);
  }
}