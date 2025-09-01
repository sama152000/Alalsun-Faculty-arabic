 import { Component, OnInit, OnDestroy } from '@angular/core';
 import { CommonModule, DatePipe } from '@angular/common';
 import { NewsItem } from '../../../model/news-item.model';
 import { FacultyIntro } from '../../../model/faculty-intro.model';
 import { NewsService } from '../../../Services/home-news.service.service';
 import { FacultyIntroService } from '../../../Services/faculty-intro.service';
import { FormsModule } from '@angular/forms';


 @Component({
   selector: 'app-latest-news',
   standalone: true,
   imports: [CommonModule, FormsModule],
   templateUrl: './latest-news.component.html',
   styleUrls: ['./latest-news.component.css']
 })
 export class LatestNewsComponent implements OnInit, OnDestroy {
  newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'Conference on Translation & Cultural Communication',
      excerpt: 'Focus on specialized translation and cultural dialogue. Join experts from around the world discussing the future of cross-cultural communication.',
      date: '12 Oct 2025',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Conference',
      author: 'Dr. Sarah Ahmed',
      priority: true
    },
    {
      id: 2,
      title: 'Opening of New German Language Lab',
      excerpt: 'Equipped with modern audio-visual technologies. State-of-the-art facilities to enhance German language learning experience.',
      date: '3 Nov 2025',
      image: 'https://images.pexels.com/photos/8617733/pexels-photo-8617733.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Facilities',
      author: 'Prof. Michael Weber'
    },
    {
      id: 3,
      title: 'Student Exchange Scholarship – Confucius Classroom',
      excerpt: 'Study opportunities in Chinese language & culture. Exclusive scholarship program for outstanding students.',
      date: '1 Dec 2025',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Scholarship',
      author: 'Dr. Li Wei',
      priority: false
    }
  ];
  facultyIntro: FacultyIntro | null = null;

   // Time-related properties
   currentTime: Date = new Date();
   timezone: string = 'توقيت القاهرة (UTC+2)';
   private timeInterval: any;

   // Statistics properties
   totalNews: number = 0;
   todayNews: number = 0;
   weeklyNews: number = 0;

   constructor(
     private newsService: NewsService,
     private facultyIntroService: FacultyIntroService
   ) {}

   ngOnInit(): void {
     this.loadNewsItems();
     this.loadFacultyIntro();
     this.updateTime();
     this.calculateStatistics();
     
     // Update time every second
     this.timeInterval = setInterval(() => {
       this.updateTime();
     }, 1000);
   }

   ngOnDestroy(): void {
     if (this.timeInterval) {
       clearInterval(this.timeInterval);
     }
   }

   private loadNewsItems(): void {
     this.newsService.getNewsItems().subscribe(items => {
       this.newsItems = items;
       this.calculateStatistics();
     });
   }

   private loadFacultyIntro(): void {
     this.facultyIntroService.getFacultyIntro().subscribe(intro => {
       this.facultyIntro = intro;
     });
   }

   private updateTime(): void {
     this.currentTime = new Date();
   }

   private calculateStatistics(): void {
     const today = new Date();
     const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

     this.totalNews = this.newsService.getTotalNews();

     // For demo purposes, simulate today's and weekly news count
     this.todayNews = this.newsService.getTodayNews();
     this.weeklyNews = this.newsService.getWeeklyNews();
   }

   // Method to handle read more click
   onReadMore(newsItem: NewsItem): void {
     console.log('Reading more about:', newsItem.title);
     // Implement navigation or modal logic here
   }

   // Method to load more news
   onLoadMore(): void {
     console.log('Loading more news...');
     // Implement load more functionality here
   }

   // Method to get category color class
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