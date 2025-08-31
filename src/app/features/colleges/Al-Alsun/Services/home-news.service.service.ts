import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsItem } from '../model/news-item.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'مؤتمر الترجمة والتواصل الثقافي',
      excerpt: 'التركيز على الترجمة المتخصصة والحوار الثقافي. انضم إلى خبراء من جميع أنحاء العالم لمناقشة مستقبل التواصل عبر الثقافات.',
      date: '12 أكتوبر 2025',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'مؤتمر',
      author: 'د. سارة أحمد',
      priority: true
    },
    {
      id: 2,
      title: 'افتتاح معمل اللغة الألمانية الجديد',
      excerpt: 'مجهز بأحدث التقنيات السمعية والبصرية. مرافق حديثة لتعزيز تجربة تعلم اللغة الألمانية.',
      date: '3 نوفمبر 2025',
      image: 'https://images.pexels.com/photos/8617733/pexels-photo-8617733.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'مرافق',
      author: 'البروفيسور مايكل ويبر'
    },
    {
      id: 3,
      title: 'منحة تبادل طلابي - فصل كونفوشيوس',
      excerpt: 'فرص دراسية في اللغة والثقافة الصينية. برنامج منح حصري للطلاب المتميزين.',
      date: '1 ديسمبر 2025',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'منحة',
      author: 'د. لي وي',
      priority: false
    }
  ];

  getNewsItems(): Observable<NewsItem[]> {
    return of(this.newsItems);
  }

  getTotalNews(): number {
    return this.newsItems.length;
  }

  getTodayNews(): number {
    return Math.floor(Math.random() * 3) + 1;
  }

  getWeeklyNews(): number {
    return Math.floor(Math.random() * 10) + 5;
  }
}