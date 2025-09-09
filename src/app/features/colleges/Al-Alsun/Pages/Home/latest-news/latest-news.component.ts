import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  author?: string;
  priority?: boolean;
}

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit, OnDestroy {
  newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'مؤتمر عن الترجمة والتواصل الثقافي',
      excerpt: 'يركز على الترجمة المتخصصة والحوار الثقافي. انضم إلى الخبراء من جميع أنحاء العالم لمناقشة مستقبل التواصل عبر الثقافات.',
      date: '12 أكتوبر 2025',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'مؤتمر',
      author: 'د. سارة أحمد',
      priority: true
    },
    {
      id: 2,
      title: 'افتتاح مختبر جديد للغة الألمانية',
      excerpt: 'مجهز بتقنيات صوتية وبصرية حديثة. مرافق متطورة لتعزيز تجربة تعلم اللغة الألمانية.',
      date: '3 نوفمبر 2025',
      image: 'https://images.pexels.com/photos/8617733/pexels-photo-8617733.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'مرافق',
      author: 'أ.د. مايكل فايبر'
    },
    {
      id: 3,
      title: 'منحة تبادل طلابي – فصل الكونفوشيوس',
      excerpt: 'فرص دراسية في اللغة والثقافة الصينية. برنامج منح حصري للطلاب المتميزين.',
      date: '1 ديسمبر 2025',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'منحة',
      author: 'د. لي وي',
      priority: false
    }
  ];

  // الخصائص المتعلقة بالوقت
  currentTime: Date = new Date();
  timezone: string = 'UTC+2';
  private timeInterval: any;

  // خصائص الإحصائيات
  totalNews: number = 0;
  todayNews: number = 0;
  weeklyNews: number = 0;

  ngOnInit(): void {
    this.updateTime();
    this.calculateStatistics();
    
    // تحديث الوقت كل ثانية
    this.timeInterval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  private updateTime(): void {
    this.currentTime = new Date();
  }

  private calculateStatistics(): void {
    const today = new Date();
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

    this.totalNews = this.newsItems.length;
    
    // لغرض التظاهر، محاكاة عدد الأخبار اليومية والأسبوعية
    this.todayNews = Math.floor(Math.random() * 3) + 1;
    this.weeklyNews = Math.floor(Math.random() * 10) + 5;
  }

  // طريقة للتعامل مع النقر على "اقرأ المزيد"
  onReadMore(newsItem: NewsItem): void {
    console.log('اقرأ المزيد عن:', newsItem.title);
    // نفذ منطق التنقل أو النافذة هنا
  }

  // طريقة لتحميل المزيد من الأخبار
  onLoadMore(): void {
    console.log('جارٍ تحميل المزيد من الأخبار...');
    // نفذ وظيفة تحميل المزيد هنا
  }

  // طريقة للحصول على فئة لون التصنيف
  getCategoryClass(category: string): string {
    const categoryClasses: { [key: string]: string } = {
      'مؤتمر': 'category-conference',
      'مرافق': 'category-facilities', 
      'منحة': 'category-scholarship',
      'أكاديمي': 'category-academic',
      'بحث': 'category-research'
    };
    
    return categoryClasses[category] || 'category-default';
  }
}