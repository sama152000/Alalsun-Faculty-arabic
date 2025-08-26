import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

interface NewsItem {
  id: number;
  title: string; // العنوان
  excerpt: string; // المقتطف
  date: string; // التاريخ
  image: string; // الصورة
  category: string; // الفئة
  author?: string; // المؤلف (اختياري)
  priority?: boolean; // الأولوية (اختياري)
}

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit, OnDestroy {
  newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'مؤتمر حول الترجمة والتواصل الثقافي',
      excerpt: 'التركيز على الترجمة المتخصصة والحوار الثقافي. انضم إلى خبراء من جميع أنحاء العالم لمناقشة مستقبل التواصل عبر الثقافات.',
      date: '12 Oct 2025',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'مؤتمر',
      author: 'د. سارة أحمد',
      priority: true
    },
    {
      id: 2,
      title: 'افتتاح مختبر جديد لتعليم اللغة الألمانية',
      excerpt: 'مجهز بتقنيات سمعية وبصرية حديثة. مرافق متطورة لتعزيز تجربة تعلم اللغة الألمانية.',
      date: '3 Nov 2025',
      image: 'https://images.pexels.com/photos/8617733/pexels-photo-8617733.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'مرافق',
      author: 'أ.د. مايكل ويبر'
    },
    {
      id: 3,
      title: 'منحة تبادل طلابي - فصل كونفوشيوس',
      excerpt: 'فرص دراسية في اللغة والثقافة الصينية. برنامج منح دراسية حصري للطلاب المتميزين.',
      date: '1 Dec 2025',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'منحة دراسية',
      author: 'د. لي وي',
      priority: false
    }
  ];

  currentTime: Date = new Date();
  timezone: string = 'التوقيت العالمي +2'; 
  private timeInterval: any;

  totalNews: number = 0; // إجمالي الأخبار
  todayNews: number = 0; // أخبار اليوم
  weeklyNews: number = 0; // أخبار الأسبوع

  ngOnInit(): void {
    this.updateTime();
    this.calculateStatistics();
    
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
    
    this.todayNews = Math.floor(Math.random() * 3) + 1;
    this.weeklyNews = Math.floor(Math.random() * 10) + 5;
  }

  onReadMore(newsItem: NewsItem): void {
    console.log('قراءة المزيد عن:', newsItem.title);
  }

  onLoadMore(): void {
    console.log('تحميل المزيد من الأخبار...');
  }

  getCategoryClass(category: string): string {
    const categoryClasses: { [key: string]: string } = {
      'مؤتمر': 'category-conference', // فئة المؤتمرات
      'مرافق': 'category-facilities', // فئة المرافق
      'منحة دراسية': 'category-scholarship', // فئة المنح الدراسية
      'أكاديمي': 'category-academic', 
      'بحث': 'category-research' // فئة الأبحاث
    };
    
    return categoryClasses[category] || 'category-default';
  }
}