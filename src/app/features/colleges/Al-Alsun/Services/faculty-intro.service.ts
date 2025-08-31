import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FacultyIntro } from '../model/faculty-intro.model';

@Injectable({
  providedIn: 'root'
})
export class FacultyIntroService {
  private facultyIntro: FacultyIntro = {
    id: 1,
    title: 'مقدمة عن كلية الألسن - جامعة الأقصر',
    description: 'تعرف على كلية الألسن وبرامجها الأكاديمية المتميزة في دراسة اللغات والترجمة، ورؤيتها في إعداد خريجين مؤهلين للمنافسة في سوق العمل العالمي.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '5:30',
    publishDate: '2024-12-01',
    category: 'تعريف بالكلية'
  };

  getFacultyIntro(): Observable<FacultyIntro> {
    return of(this.facultyIntro);
  }
}