import { Injectable } from '@angular/core';
import { EducationalService } from '../model/educational-service.model';

@Injectable({
  providedIn: 'root'
})
export class EducationalServiceService {
  private services: EducationalService[] = [
    {
      id: 1,
      title: 'قاعات المحاضرات',
      description: 'تضم الكلية 22 قاعة محاضرات مجهزة بمقاعد طلابية مناسبة وأدوات تعليمية حديثة لتوفير بيئة تعليمية مريحة. بالإضافة إلى ذلك، هناك قاعتان كبيرتان (كل منهما لا تقل عن 50 مترًا مربعًا) تُستخدمان للمحاضرات والمؤتمرات العلمية والندوات الأكاديمية.',
      imageUrl: './assets/img.png',
      icon: 'pi pi-building',
      category: 'البنية التحتية'
    },
    {
      id: 2,
      title: 'مكتبة الكلية',
      description: 'تضم كلية الألسن مكتبتين رئيسيتين: واحدة للموارد اللغوية العربية، وأخرى للغات الأجنبية، بما في ذلك الإنجليزية، الفرنسية، الألمانية، الإيطالية، الروسية، اللاتينية، الإسبانية، والمصرية القديمة. تقدم المكتبات مجموعة واسعة من الكتب، المراجع، المواد البحثية، والموارد الأكاديمية الحديثة لدعم الطلاب والباحثين.',
      imageUrl: './assets/img.png',
      icon: 'pi pi-book',
      category: 'الموارد'
    },
    {
      id: 3,
      title: 'مختبر إكسلينج',
      description: 'كجزء من برنامج إيراسموس+ للتعاون الأكاديمي بين الجامعات الأوروبية والمصرية، تشارك جامعة الأقصر، ممثلة بكلية الألسن، في مشروع إكسلينج ("نحو التميز في اللغويات التطبيقية"). يهدف المشروع إلى إنشاء مركز تميز للغويات التطبيقية في الكلية، مما يعزز البحث اللغوي والتدريب على المنهجيات الحديثة.',
      imageUrl: './assets/img.png',
      icon: 'pi pi-star',
      category: 'البحث العلمي'
    },
    {
      id: 4,
      title: 'فصل كونفوشيوس',
      description: 'فصل كونفوشيوس هو امتداد لمعاهد كونفوشيوس التي أسستها الصين لتعزيز اللغة والثقافة الصينية عالميًا. بحلول عام 2012، تم إنشاء أكثر من 400 معهد و500 فصل في 108 دول. يقدم الفصل في كلية الألسن تدريس اللغة الصينية، تدريب المعلمين المحليين، اختبارات الكفاءة في اللغة الصينية، شهادات تأهيل المعلمين، وبرامج التبادل الثقافي والتعليمي. كما يوفر استشارات وبحوثًا حول المجتمع الصيني الحديث، الثقافة، والاقتصاد.',
      imageUrl: './assets/img.png',
      icon: 'pi pi-globe',
      category: 'الدولي'
    },
    {
      id: 5,
      title: 'مختبرات اللغات',
      description: 'تضم الكلية ثلاثة مختبرات للغات والنطق، كل منها مجهز بـ 24 وحدة تعليمية، تتضمن سماعات وأنظمة صوتية لتدريب النطق والاستماع.',
      imageUrl: './assets/img.png',
      icon: 'pi pi-microphone',
      category: 'التكنولوجيا'
    },
    {
      id: 6,
      title: 'مختبرات الحاسوب',
      description: 'تضم الكلية أيضًا مختبرات حاسوب مجهزة بأجهزة كمبيوتر حديثة وأنظمة وسائط متعددة لدعم التعليم الرقمي، تكنولوجيا الترجمة، والبحث الأكاديمي.',
      imageUrl: './assets/img.png',
      icon: 'pi pi-desktop',
      category: 'التكنولوجيا'
    }
  ];

  getAllServices(): EducationalService[] {
    return this.services;
  }

  getServiceById(id: number): EducationalService | undefined {
    return this.services.find(service => service.id === id);
  }

  getNextServiceId(currentId: number): number | null {
    const currentIndex = this.services.findIndex(s => s.id === currentId);
    if (currentIndex === -1 || currentIndex === this.services.length - 1) {
      return null;
    }
    return this.services[currentIndex + 1].id;
  }

  getPreviousServiceId(currentId: number): number | null {
    const currentIndex = this.services.findIndex(s => s.id === currentId);
    if (currentIndex === -1 || currentIndex === 0) {
      return null;
    }
    return this.services[currentIndex - 1].id;
  }
}