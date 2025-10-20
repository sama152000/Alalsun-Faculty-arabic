import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FacultyService, ServiceCategory } from '../model/services.model';

@Injectable({
  providedIn: 'root'
})
export class FacultyServiceService {
  private services: FacultyService[] = [
    {
      id: 'language-translation-center',
      name: 'مركز الألسن للغات والترجمة',
      shortName: 'مركز اللغات',
      description: 'مركز رائد لتعليم اللغات وخدمات الترجمة، يقدم برامج تدريبية واستشارات لغوية.',
      image: './assets/service1.png',
      icon: 'pi pi-globe',
      establishedDate: '25 سبتمبر 2017',
      category: ServiceCategory.LANGUAGE_CENTER,
      route: '/services/language-translation-center',
      contact: {
        contactPerson: 'الأستاذة شيماء',
        phone: '01021817597',
        email: 'language.center@alsun.luxor.edu.eg'
      },
      details: {
        vision: 'تحقيق القيادة العلمية والتميز في مجالات تدريس اللغات والترجمة محلياً ودولياً لتحقيق التواصل المعرفي والثقافي مع الدول حول العالم بما يخدم المجتمع ويساهم في مواجهة التحديات الحالية والمستقبلية.',
        objectives: [
          'إعداد وتنفيذ برامج تدريبية في اللغات المختلفة التي تُدرس في أقسام كلية اللغات، باستخدام أحدث الطرق التعليمية والتكنولوجيا الحديثة في مجال اللغات والترجمة للجامعة والجهات الخارجية.',
          'تقديم استشارات لغوية لجميع اللغات التي تُدرس في الكلية.'
        ],
        staff: [
          {
            id: 'mahmoud-elnoubi',
            name: 'أ.د. محمود النوبي أحمد',
            position: 'رئيس مجلس الإدارة',
            role: 'رئيس مجلس إدارة مركز الألسن للغات والترجمة',
            photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=500'
          },
          {
            id: 'mohammed-farouk',
            name: 'د. محمد فرج محمد بدر',
            position: 'مدير المركز',
            role: 'مدير المركز',
            photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=500'
          },
          {
            id: 'asmaa-salah',
            name: 'د. أسماء صلاح عبد الرازق',
            position: 'منسقة الأنشطة',
            role: 'منسقة أنشطة التدريب والدورات',
            photo: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=500'
          },
          {
            id: 'hany-ali',
            name: 'د. هاني علي',
            position: 'منسق الأنشطة',
            role: 'منسق أنشطة الترجمة والتحرير اللغوي',
            photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=500'
          },
          {
            id: 'lamis-hassan',
            name: 'د. لميس حسن البنا محمد',
            position: 'منسقة الأنشطة',
            role: 'منسقة أنشطة الاختبارات اللغوية',
            photo: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=500'
          },
          {
            id: 'shaimaa-abdallah',
            name: 'الأستاذة شيماء عبد الله',
            position: 'مسؤول إداري',
            role: 'مسؤول إداري',
            photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=500'
          },
          {
            id: 'salwa-sanousi',
            name: 'الأستاذة سلوى سنوسي سليمان',
            position: 'مسؤولة مالية',
            role: 'مسؤولة مالية',
            photo: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=500'
          }
        ],
        activities: [
          {
            id: 'training-courses',
            name: 'التدريب والدورات',
            description: 'برامج تدريب لغوي احترافية للجامعة والجهات الخارجية',
            coordinator: 'د. أسماء صلاح عبد الرازق'
          },
          {
            id: 'translation-editing',
            name: 'الترجمة والتحرير اللغوي',
            description: 'خدمات ترجمة وتحرير لغوي احترافية',
            coordinator: 'د. هاني علي'
          },
          {
            id: 'language-testing',
            name: 'الاختبارات اللغوية',
            description: 'اختبارات وتقييم كفاءة لغوية شاملة',
            coordinator: 'د. لميس حسن البنا محمد'
          }
        ]
      }
    },
    {
      id: 'confucius-classroom',
      name: 'فصل كونفوشيوس',
      shortName: 'فصل كونفوشيوس',
      description: 'مؤسسة تعليمية غير ربحية مخصصة لنشر اللغة والثقافة الصينية حول العالم.',
      image: './assets/service2.jpg',
      icon: 'pi pi-star',
      establishedDate: '2019',
      category: ServiceCategory.CULTURAL_CENTER,
      route: '/services/confucius-classroom',
      contact: {
        facebook: 'https://www.facebook.com/profile.php?id=100064953162513',
        email: 'confucius@alsun.luxor.edu.eg'
      },
      details: {
        mission: 'تم إنشاء فصل كونفوشيوس كمؤسسة تعليمية غير ربحية بهدف نشر اللغة والثقافة الصينية حول العالم. تم افتتاح فصل كونفوشيوس في جامعة الأقصر عام 2019 بالتعاون مع فصل كونفوشيوس الرئيسي وجامعة العاصمة العادية في الصين.',
        programs: [
          {
            id: 'chinese-language',
            name: 'دورات اللغة الصينية',
            description: 'برامج تعلم اللغة الصينية الشاملة لجميع المستويات',
            duration: 'نظام الفصل الدراسي',
            requirements: ['شهادة التعليم الأساسي', 'الالتزام بالحضور']
          },
          {
            id: 'cultural-exchange',
            name: 'برامج التبادل الثقافي',
            description: 'برامج تبادل طلابي وأكاديمي مع الجامعات الصينية',
            duration: 'متغير',
            requirements: ['التميز الأكاديمي', 'كفاءة لغوية']
          }
        ],
        activities: [
          {
            id: 'cultural-events',
            name: 'فعاليات ثقافية صينية',
            description: 'احتفالات ومهرجانات ثقافية صينية دورية'
          },
          {
            id: 'language-competitions',
            name: 'مسابقات اللغة الصينية',
            description: 'مسابقات سنوية لتشجيع تعلم اللغة الصينية'
          }
        ],
        achievements: [
          {
            id: 'partnership-2019',
            title: 'شراكة مع جامعة العاصمة العادية',
            description: 'إقامة شراكة رسمية مع جامعة العاصمة العادية في الصين',
            date: new Date('2019-01-01')
          }
        ]
      }
    },
    {
      id: 'alsun-journal',
      name: 'مجلة الألسن للغات والعلوم الإنسانية',
      shortName: 'مجلة الألسن',
      description: 'مجلة فصلية مرجعية تصدر عن كلية الألسن، حاصلة على تصنيف 7/7 في تقييمات يوليو 2024.',
      image: './assets/service3.jpg',
      icon: 'pi pi-book',
      establishedDate: 'خريف 2019',
      category: ServiceCategory.ACADEMIC_JOURNAL,
      route: '/services/alsun-journal',
      contact: {
        website: 'https://maks.journals.ekb.eg/',
        email: 'journal@alsun.luxor.edu.eg'
      },
      details: {
        mission: 'مجلة الألسن للغات والعلوم الإنسانية هي مجلة فصلية مرجعية تصدر عن كلية الألسن بجامعة الأقصر. صدر العدد الأول في خريف 2019 (أكتوبر-نوفمبر-ديسمبر).',
        specifications: [
          {
            label: 'تكرار النشر',
            value: 'فصلي',
            icon: 'pi pi-calendar'
          },
          {
            label: 'مراجعة التقييم',
            value: 'نعم',
            icon: 'pi pi-check-circle'
          },
          {
            label: 'التصنيف',
            value: '7/7 (يوليو 2024)',
            icon: 'pi pi-star'
          },
          {
            label: 'العدد الأول',
            value: 'خريف 2019',
            icon: 'pi pi-clock'
          }
        ],
        editorialBoard: [
          {
            id: 'mahmoud-elnoubi-editor',
            name: 'أ.د. محمود النوبي أحمد',
            position: 'رئيس مجلس الإدارة',
            role: 'رئيس التحرير',
            affiliation: 'كلية الألسن، جامعة الأقصر'
          },
          {
            id: 'youssef-abbas',
            name: 'أ.د. يوسف عباس علي',
            position: 'نائب رئيس مجلس الإدارة',
            role: 'نائب رئيس التحرير',
            affiliation: 'كلية الألسن، جامعة الأقصر'
          },
          {
            id: 'asmaa-salah-editor',
            name: 'د. أسماء صلاح عبد الرازق',
            position: 'مدير التحرير',
            role: 'مدير التحرير',
            affiliation: 'كلية الألسن، جامعة الأقصر'
          },
          {
            id: 'reham-shoukry',
            name: 'د. ريهام شكري عبد السلام',
            position: 'مساعد مدير التحرير',
            role: 'مساعد مدير التحرير',
            affiliation: 'كلية الألسن، جامعة الأقصر'
          },
          {
            id: 'ramadan-eid',
            name: 'د. رمضان عيد',
            position: 'محرر لغوي',
            role: 'محرر لغوي',
            affiliation: 'كلية الألسن، جامعة الأقصر'
          },
          {
            id: 'lamis-hassan-editor',
            name: 'د. لميس حسن البنا محمد',
            position: 'محررة لغوية',
            role: 'محررة لغوية',
            affiliation: 'كلية الألسن، جامعة الأقصر'
          },
          {
            id: 'arwa-ahmed',
            name: 'الأستاذة أروى أحمد حسن',
            position: 'محررة لغوية',
            role: 'محررة لغوية',
            affiliation: 'كلية الألسن، جامعة الأقصر'
          },
          {
            id: 'baleegh-hamdy',
            name: 'د. بليغ حمدي',
            position: 'محرر فني',
            role: 'محرر فني',
            affiliation: 'كلية الألسن، جامعة الأقصر'
          },
          {
            id: 'mosheera-mahmoud',
            name: 'الأستاذة مشيرة محمود',
            position: 'محررة فنية',
            role: 'محررة فنية',
            affiliation: 'كلية الألسن، جامعة الأقصر'
          },
          {
            id: 'aya-said',
            name: 'الأستاذة آية سعيد علي',
            position: 'محررة صفحات',
            role: 'محررة صفحات',
            affiliation: 'كلية الألسن، جامعة الأقصر'
          },
          {
            id: 'safaa-ali',
            name: 'د. صفاء علي',
            position: 'سكرتيرة التحرير',
            role: 'سكرتيرة التحرير',
            affiliation: 'كلية الألسن، جامعة الأقصر'
          },
          {
            id: 'khaled-said',
            name: 'الأستاذ خالد سعيد',
            position: 'مسؤول مالي',
            role: 'مسؤول تنفيذي',
            affiliation: 'كلية الألسن، جامعة الأقصر'
          },
          {
            id: 'randa-andria',
            name: 'الأستاذة رندة أندريا أنور',
            position: 'مسؤولة إدارية',
            role: 'مسؤولة تنفيذية',
            affiliation: 'كلية الألسن، جامعة الأقصر'
          },
          {
            id: 'elena-tarasyuk',
            name: 'أ.د. إلينا تاراسيوك',
            position: 'عضو هيئة التحرير الخارجية',
            role: 'عضو هيئة التحرير الخارجية',
            affiliation: 'مؤسسة خارجية'
          },
          {
            id: 'rosmarie-kalass',
            name: 'أ.د. روزماري كالاس',
            position: 'عضو هيئة التحرير الخارجية',
            role: 'عضو هيئة التحرير الخارجية',
            affiliation: 'مؤسسة خارجية'
          },
          {
            id: 'mariam-albadi',
            name: 'أ.د. مريم بنت سالم البادية',
            position: 'عضو هيئة التحرير الخارجية',
            role: 'عضو هيئة التحرير الخارجية',
            affiliation: 'مؤسسة خارجية'
          },
          {
            id: 'warda-bouiran',
            name: 'أ.د. وردة بويران',
            position: 'عضو هيئة التحرير الخارجية',
            role: 'عضو هيئة التحرير الخارجية',
            affiliation: 'مؤسسة خارجية'
          },
          {
            id: 'hani-ismail',
            name: 'أ.د. هاني إسماعيل محمد إسماعيل',
            position: 'عضو هيئة التحرير الخارجية',
            role: 'عضو هيئة التحرير الخارجية',
            affiliation: 'مؤسسة خارجية'
          },
          {
            id: 'rasha-aboudi',
            name: 'أ.د. رشا محمد أبو ضي',
            position: 'عضو هيئة التحرير الخارجية',
            role: 'عضو هيئة التحرير الخارجية',
            affiliation: 'مؤسسة خارجية'
          }
        ]
      }
    }
  ];

  getAllServices(): Observable<FacultyService[]> {
    return of(this.services);
  }

  getServiceById(id: string): Observable<FacultyService | undefined> {
    return of(this.services.find(service => service.id === id));
  }

  getServicesByCategory(category: ServiceCategory): Observable<FacultyService[]> {
    return of(this.services.filter(service => service.category === category));
  }

  addService(service: FacultyService): Observable<FacultyService> {
    this.services.push(service);
    return of(service);
  }

  updateService(id: string, updates: Partial<FacultyService>): Observable<FacultyService | null> {
    const index = this.services.findIndex(service => service.id === id);
    if (index !== -1) {
      this.services[index] = { ...this.services[index], ...updates };
      return of(this.services[index]);
    }
    return of(null);
  }

  deleteService(id: string): Observable<boolean> {
    const index = this.services.findIndex(service => service.id === id);
    if (index !== -1) {
      this.services.splice(index, 1);
      return of(true);
    }
    return of(false);
  }

  // Method to get Al-Alsun Journal specifically
  getAlAlsunJournal(): Observable<FacultyService | undefined> {
    return of(this.services.find(service => service.id === 'alsun-journal'));
  }
}