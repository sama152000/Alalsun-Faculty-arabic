import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { CustomPage, PageTemplate } from '../model/custom-page.model';

@Injectable({
  providedIn: 'root'
})
export class CustomPageService {
  private pagesSubject = new BehaviorSubject<CustomPage[]>([]);
  private pagesChanged = new Subject<void>();
  private previewData: any = null;

  get pagesChanged$(): Observable<void> {
    return this.pagesChanged.asObservable();
  }

  private pages: CustomPage[] = [
    {
      id: '1',
      
      title: 'مراكز البحث',
      route: 'research-centers',
      template: PageTemplate.IMAGE_TITLE_TEXT,
      content: {
        title: 'مراكز البحث في كلية الألسن',
        text: 'تستضيف كليتنا عدة مراكز بحثية عالمية المستوى مكرسة لتطوير المعرفة في اللغات، الترجمة، والدراسات الثقافية. تعمل هذه المراكز كمحاور للبحث الابتكاري والتعاون الأكاديمي.',
        image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      isPublished: true,
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15')
    },
    {
      id: '2',
      title: 'خدمات الطلاب',
      route: 'student-services',
      template: PageTemplate.CARDS,
      content: {
        title: 'خدمات ودعم الطلاب',
        cards: [
          {
            id: '1',
            title: 'الإرشاد الأكاديمي',
            description: 'إرشاد احترافي لاختيار المقررات والتخطيط الأكاديمي',
            image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
            link: '/academic-advising'
          },
          {
            id: '2',
            title: 'خدمات التوظيف',
            description: 'مساعدة في توظيف الوظائف وبرامج تطوير المهنة',
            image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
            link: '/career-services'
          },
          {
            id: '3',
            title: 'أنشطة الطلاب',
            description: 'الفعاليات الثقافية، الأندية، والأنشطة اللامنهجية',
            image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
            link: '/student-activities'
          }
        ]
      },
      isPublished: false,
      createdAt: new Date('2024-02-01'),
      updatedAt: new Date('2024-02-01')
    }
  ];

  private templates = [
    {
      id: 'title-text',
      name: 'العنوان والنص',
      description: 'صفحة بسيطة تحتوي على عنوان ومحتوى فقرة',
      icon: 'pi pi-align-left',
      preview: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'image-title-text',
      name: 'الصورة، العنوان والنص',
      description: 'صفحة تحتوي على صورة على اليسار، وعنوان ونص على اليمين',
      icon: 'pi pi-image',
      preview: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'cards',
      name: 'تخطيط البطاقات',
      description: 'تخطيط شبكي يحتوي على بطاقات محتوى متعددة',
      icon: 'pi pi-th-large',
      preview: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  getAllPages(): Observable<CustomPage[]> {
    return of(this.pages);
  }

  getPageById(id: string): Observable<CustomPage | undefined> {
    return of(this.pages.find(page => page.id === id));
  }

  getDraftPages(): Observable<CustomPage[]> {
    return of(this.pages.filter(page => !page.isPublished));
  }

  getPublishedPages(): Observable<CustomPage[]> {
    return of(this.pages.filter(page => page.isPublished));
  }

  getTemplates(): Observable<any[]> {
    return of(this.templates);
  }

  createPage(page: Omit<CustomPage, 'id' | 'createdAt' | 'updatedAt'>): Observable<CustomPage> {
    const normalizedRoute = page.route.startsWith('/') ? page.route.slice(1) : page.route;
    const newPage: CustomPage = {
      ...page,
      route: normalizedRoute,
      id: this.generateId(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.pages.push(newPage);
    this.pagesChanged.next();
    return of(newPage);
  }

  updatePage(id: string, updates: Partial<CustomPage>): Observable<CustomPage | null> {
    const index = this.pages.findIndex(page => page.id === id);
    if (index !== -1) {
      const normalizedRoute = updates.route && updates.route.startsWith('/') ? updates.route.slice(1) : updates.route;
      this.pages[index] = {
        ...this.pages[index],
        ...updates,
        route: normalizedRoute || this.pages[index].route,
        updatedAt: new Date()
      };
      this.pagesChanged.next();
      return of(this.pages[index]);
    }
    return of(null);
  }

  publishPage(id: string): Observable<boolean> {
    const page = this.pages.find(p => p.id === id);
    if (page) {
      page.isPublished = true;
      page.updatedAt = new Date();
      this.pagesChanged.next();
      return of(true);
    }
    return of(false);
  }

  unpublishPage(id: string): Observable<boolean> {
    const page = this.pages.find(p => p.id === id);
    if (page) {
      page.isPublished = false;
      page.updatedAt = new Date();
      this.pagesChanged.next();
      return of(true); // تم تصحيح العودة إلى true عند النجاح
    }
    return of(false);
  }

  deletePage(id: string): Observable<boolean> {
    const index = this.pages.findIndex(page => page.id === id);
    if (index !== -1) {
      this.pages.splice(index, 1);
      this.pagesChanged.next();
      return of(true);
    }
    return of(false);
  }

  setPreviewData(data: any): void {
    this.previewData = data;
    console.log('تم تعيين بيانات المعاينة:', this.previewData); // لأغراض التصحيح
  }

  getPreviewData(): any {
    console.log('تم استرجاع بيانات المعاينة:', this.previewData); // لأغراض التصحيح
    return this.previewData;
  }

  clearPreviewData(): void {
    this.previewData = null;
    console.log('تم مسح بيانات المعاينة'); // لأغراض التصحيح
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}