import { Component, ViewChild, ElementRef, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Department {
  name: string; // اسم القسم
  link: string; // رابط القسم
  icon: string; // أيقونة القسم
  color: string; // لون خلفية القسم
}

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit, OnDestroy {
  @ViewChild('sliderContainer') sliderContainer!: ElementRef;

  departments: Department[] = [
    {
      name: 'اللغة العربية',
      link: '/departments/arabic',
      icon: 'pi pi-book',
      color: 'linear-gradient(135deg, #1e4a8c 0%, #2d5aa0 100%)'
    },
    {
      name: 'اللغة الإنجليزية',
      link: '/departments/english',
      icon: 'pi pi-globe',
      color: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)'
    },
    {
      name: 'اللغة الفرنسية',
      link: '/departments/french',
      icon: 'pi pi-flag',
      color: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)'
    },
    {
      name: 'اللغة الألمانية',
      link: '/departments/german',
      icon: 'pi pi-map',
      color: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)'
    },
    {
      name: 'اللغة الصينية',
      link: '/departments/chinese',
      icon: 'pi pi-star',
      color: 'linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%)'
    },
    {
      name: 'اللغة الإيطالية',
      link: '/departments/italian',
      icon: 'pi pi-heart',
      color: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)'
    },
    {
      name: 'اللغة الإسبانية',
      link: '/departments/spanish',
      icon: 'pi pi-sun',
      color: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)'
    },
    {
      name: 'اللغة الروسية',
      link: '/departments/russian',
      icon: 'pi pi-shield',
      color: 'linear-gradient(135deg, #34495e 0%, #2c3e50 100%)'
    }
  ];

  currentSlide = 0;
  slideWidth = 220;
  maxSlides = 0;
  dotsArray: number[] = [];
  cardsPerView = 4;
  autoSlideInterval: any;
  isTransitioning = false;
  baseSlides = 8; // Number of slides for one set of departments
  totalSlides = 24; // 3 sets of 8 departments

  ngOnInit(): void {
    this.baseSlides = this.departments.length;
    this.totalSlides = this.departments.length * 3;
    
    // تهيئة المؤقت لتحريك الشرائح تلقائيًا كل 3 ثواني
    this.autoSlideInterval = setInterval(() => {
      this.slideRight();
    }, 3000);
  }

  ngOnDestroy(): void {
    // تنظيف المؤقت عند تدمير المكون
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.calculateSlider();
      this.updateDotsArray();
      // Start at the middle set (second set of departments) for seamless infinite loop
      this.currentSlide = this.baseSlides;
      this.updateSliderPosition(false);
    }, 0);
  }

  @HostListener('window:resize')
  onResize() {
    // إعادة حساب الشرائح عند تغيير حجم النافذة
    this.calculateSlider();
    this.updateDotsArray();
  }

  // حساب عدد الشرائح وأبعادها بناءً على عرض الحاوية
  calculateSlider() {
    const containerWidth = this.sliderContainer?.nativeElement.offsetWidth || 1200;
    
    if (window.innerWidth <= 576) {
      this.cardsPerView = 1;
      this.slideWidth = 280;
    } else if (window.innerWidth <= 768) {
      this.cardsPerView = 2;
      this.slideWidth = 260;
    } else if (window.innerWidth <= 992) {
      this.cardsPerView = 3;
      this.slideWidth = 240;
    } else {
      this.cardsPerView = 4;
      this.slideWidth = 220;
    }
    
    // Ensure current slide is within the middle set
    if (this.currentSlide < this.baseSlides) {
      this.currentSlide += this.baseSlides;
    } else if (this.currentSlide >= this.baseSlides * 2) {
      this.currentSlide -= this.baseSlides;
    }
  }

  // تحديث مصفوفة النقاط للتنقل بين الشرائح
  updateDotsArray() {
    this.dotsArray = Array(this.baseSlides).fill(0).map((_, i) => i);
  }

  // Update slider position with or without transition
  updateSliderPosition(withTransition: boolean = true) {
    const track = this.sliderContainer?.nativeElement.querySelector('.departments-track');
    if (track) {
      track.style.transition = withTransition ? 'transform 0.4s ease-in-out' : 'none';
      track.style.transform = `translateX(-${this.currentSlide * this.slideWidth}px)`;
    }
  }

  // تحريك الشريحة إلى اليسار (الشرائح السابقة) مع حلقة لا نهائية
  slideLeft() {
    if (this.isTransitioning) return;
    
    this.isTransitioning = true;
    this.currentSlide--;
    
    // Check if we've gone past the first slide of the middle set
    if (this.currentSlide < this.baseSlides) {
      // Move with transition first
      this.updateSliderPosition(true);
      
      // After transition, jump to end of second set
      setTimeout(() => {
        this.currentSlide = this.baseSlides * 2 - 1;
        this.updateSliderPosition(false);
        this.isTransitioning = false;
      }, 400);
    } else {
      this.updateSliderPosition(true);
      setTimeout(() => {
        this.isTransitioning = false;
      }, 400);
    }
  }

  // تحريك الشريحة إلى اليمين (الشرائح التالية) مع حلقة لا نهائية
  slideRight() {
    if (this.isTransitioning) return;
    
    this.isTransitioning = true;
    this.currentSlide++;
    
    // Check if we've gone past the last slide of the middle set
    if (this.currentSlide >= this.baseSlides * 2) {
      // Move with transition first
      this.updateSliderPosition(true);
      
      // After transition, jump to start of second set
      setTimeout(() => {
        this.currentSlide = this.baseSlides;
        this.updateSliderPosition(false);
        this.isTransitioning = false;
      }, 400);
    } else {
      this.updateSliderPosition(true);
      setTimeout(() => {
        this.isTransitioning = false;
      }, 400);
    }
  }

  // الانتقال إلى شريحة محددة
  goToSlide(index: number) {
    if (this.isTransitioning) return;
    
    if (index >= 0 && index < this.baseSlides) {
      this.isTransitioning = true;
      // Set to the middle set + desired index
      this.currentSlide = this.baseSlides + index;
      this.updateSliderPosition(true);
      
      setTimeout(() => {
        this.isTransitioning = false;
      }, 400);
    }
  }

  // Get current active dot index
  get activeDotIndex(): number {
    return (this.currentSlide - this.baseSlides + this.baseSlides) % this.baseSlides;
  }
}