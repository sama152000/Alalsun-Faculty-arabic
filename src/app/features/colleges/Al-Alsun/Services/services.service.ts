import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FacultyService, ServiceCategory } from '../model/services.model';

@Injectable({
  providedIn: 'root'
})
export class FacultyServiceService {
  private services: FacultyService[] = [
    // === 1. مركز الألسن للغات والترجمة (المركز الرئيسي) ===
    {
      id: 'language-translation-center',
      name: 'مركز الألسن للغات والترجمة',
      shortName: 'مركز اللغات',
      description: 'مركز رائد لتعليم اللغات وخدمات الترجمة، يوفر برامج تدريبية واستشارات لغوية.',
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
        vision: 'تحقيق الريادة العلمية والتميز في مجالات تعليم اللغات والترجمة محليًا وعالميًا من أجل تحقيق التواصل المعرفي والثقافي مع دول العالم بما يخدم المجتمع ويساهم في مواجهة التحديات الحالية والمستقبلية.',
        objectives: [
          'إعداد وتنفيذ برامج تدريبية في اللغات المختلفة التي تُدرس في أقسام كلية الألسن، باستخدام أحدث الأساليب التعليمية والتكنولوجيا الحديثة في مجال اللغات والترجمة للجامعة والجهات الخارجية.',
          'تقديم استشارات لغوية لجميع اللغات التي تُدرس في الكلية.',
          'المساهمة في ضمان جودة تعليمية متميزة مع الالتزام بالتطوير المستمر والأداء الفعال للمركز، واكتساب ثقة المجتمع في قدرات الخريجين، بهدف ضمان الجودة وتحقيق التنافسية على المستويات المحلية والإقليمية والدولية في مجالات اللغات والترجمة.',
          'المساهمة في خدمة المجتمع والبيئة، ودعم خطط التنمية، وتعزيز المساهمات المجتمعية.'
        ],
        staff: [
          {
            id: 'mahmoud-elnoubi',
            name: 'أ.د. محمود النوبي أحمد',
            position: 'رئيس مجلس الإدارة',
            role: 'رئيس مجلس إدارة مركز الألسن للغات والترجمة',
            photo: './assets/Picture1.jpg'
          },
          {
            id: 'mohammed-farouk',
            name: 'د. محمد فاروق محمد بدر',
            position: 'مدير المركز',
            role: 'مدير المركز',
            photo: './assets/userr.png'
          },
          {
            id: 'asmaa-salah',
            name: 'د. أسماء صلاح عبد الرازق',
            position: 'منسق الأنشطة',
            role: 'منسق أنشطة التدريب والدورات',
            photo: './assets/userr.png'
          },
          {
            id: 'hany-ali',
            name: 'د. هاني علي',
            position: 'منسق الأنشطة',
            role: 'منسق أنشطة الترجمة والتحرير اللغوي',
            photo: './assets/userr.png'
          },
          {
            id: 'lamis-hassan',
            name: 'د. لميس حسان البنا محمد',
            position: 'منسق الأنشطة',
            role: 'منسق أنشطة اختبارات اللغة',
            photo: './assets/userr.png'
          },
          {
            id: 'shaimaa-abdallah',
            name: 'الأستاذة شيماء عبد الله',
            position: 'مسؤول إداري',
            role: 'مسؤول إداري',
            photo: './assets/userr.png'
          },
          {
            id: 'salwa-sanousi',
            name: 'الأستاذة سلوى سنوسي سليمان',
            position: 'مسؤول مالي',
            role: 'مسؤول مالي',
            photo: './assets/userr.png'
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
            description: 'خدمات الترجمة والتحرير اللغوي الاحترافية',
            coordinator: 'د. هاني علي'
          },
          {
            id: 'language-testing',
            name: 'اختبارات اللغة',
            description: 'اختبارات وتقييمات شاملة للكفاءة اللغوية',
            coordinator: 'د. لميس حسان البنا محمد'
          }
        ],
        introduction: 'مركز الألسن للغات والترجمة بجامعة الأقصر هو وحدة خاصة تسعى دائمًا لتكون الخيار الأول للمتعلمين في مجالات اللغة والترجمة والتنمية البشرية. وهو ملتزم بتقديم منتج تنافسي على المستويات المحلية والإقليمية والدولية في مجالات الترجمة واللغات.',
        certificatesAndCourses: [
          'يقدم شهادة IELTS للغة الإنجليزية المعتمدة من المجلس الثقافي البريطاني في القاهرة، بالإضافة إلى دورات في مستويات مختلفة للغة الإنجليزية.',
          'يوفر دورات تحضيرية لاجتياز اختبار TOEFL في اللغة الإنجليزية.',
          'يوفر دورات تحضيرية لاجتياز اختبار DELF في اللغة الفرنسية.',
          'يوفر دورات تدريبية في التدقيق اللغوي من قسم اللغة العربية.',
          'يوفر دورات تدريبية في تدريس المواد الأكاديمية باللغة الإنجليزية (الرياضيات والعلوم).',
          'يوفر دورات تدريبية في اللغة الألمانية.',
          'يوفر دورات تدريبية في اللغة الصينية.',
          'يوفر دورات تدريبية في اللغة الإيطالية.',
          'يترجم المركز جميع أنواع الشهادات الرسمية، والوثائق، والأطروحات العلمية من العربية إلى لغات مختلفة والعكس.'
        ],
        centerObjectives: [
          'إعداد برامج خاصة لرفع مستوى اللغات التي تُدرس في المركز للطلاب وغيرهم.',
          'ضمان الجودة والتطوير المستمر بما يتماشى مع متطلبات التنمية الوطنية.',
          'المراجعة اللغوية للبحوث والأطروحات العلمية في مجال المركز.',
          'الربط الثقافي بين المركز ومراكز الجامعات الأخرى في شؤون اللغة، وكذلك سوق العمل الخارجي.',
          'إقامة دورات تحضيرية لاختبار TOEFL المحلي وتدريب الطلاب من داخل وخارج الجامعة.',
          'تصميم برامج تدريبية في إلقاء المحاضرات باللغات التي تُدرس في أقسام كلية الألسن بالأقصر.'
        ]
      }
    },

    // === 2. وحدة ضمان الجودة والاعتماد (كمركز منفصل) ===
    {
      id: 'quality-assurance-unit',
      name: 'وحدة ضمان الجودة والاعتماد',
      shortName: 'وحدة الجودة',
      description: 'تضمن تحسين جودة التعليم بشكل مستمر والتوافق مع المعايير الوطنية والدولية.',
      image: './assets/img.png',
      icon: 'pi pi-check-circle',
      establishedDate: '2018',
      category: ServiceCategory.LANGUAGE_CENTER,
      route: '/services/quality-assurance-unit',
      contact: {
        email: 'quality@alsun.luxor.edu.eg'
      },
      details: {
        description: 'تسعى وحدة ضمان الجودة والاعتماد بكلية الألسن إلى رفع مستوى جودة التعليم وتطوير العملية التعليمية بشكل مستمر وفقًا للمعايير الوطنية التي تتماشى مع المعايير الدولية، لتحقيق رؤية الكلية ورسالتها وأهدافها.',
        objectives: [
          'تطوير وتنفيذ سياسات وإجراءات ضمان الجودة.',
          'مراقبة البرامج الأكاديمية لضمان الامتثال لمعايير الاعتماد.',
          'إجراء تدقيقات داخلية وإعداد تقارير الاعتماد.',
          'تدريب أعضاء هيئة التدريس والموظفين على معايير الجودة وأفضل الممارسات.'
        ],
        coordinator: 'د. يوسف عباس علي',
        activities: [
          {
            id: 'accreditation-prep',
            name: 'التحضير للاعتماد',
            description: 'دعم عمليات الاعتماد الوطنية والدولية'
          },
          {
            id: 'quality-training',
            name: 'ورش عمل تدريبية على الجودة',
            description: 'برامج تدريبية حول معايير الجودة والتميز التعليمي'
          }
        ]
      }
    },

    // === 3. وحدة القياس والتقويم ===
    {
      id: 'measurement-evaluation-unit',
      name: 'وحدة القياس والتقويم',
      shortName: 'وحدة التقويم',
      description: 'تعزز أنظمة التقييم الحديثة والتصحيح الإلكتروني لتحسين جودة التعليم.',
      image: './assets/img.png',
      icon: 'pi pi-chart-line',
      establishedDate: '2020',
      category: ServiceCategory.LANGUAGE_CENTER,
      route: '/services/measurement-evaluation-unit',
      contact: {
        email: 'evaluation@alsun.luxor.edu.eg'
      },
      details: {
        description: 'بناءً على قرارات المجلس الأعلى للجامعات بتعميم التصحيح الإلكتروني في الجامعات، تلعب وحدة القياس والتقويم دورًا رئيسيًا في نشر ثقافة تطوير تقييم الطلاب وأنظمة الامتحانات كوسيلة لتحسين النظام التعليمي وضمان جودته.',
        objectives: [
          'تنفيذ أنظمة التصحيح الإلكتروني عبر جميع الأقسام.',
          'تطوير آليات تقييم عادلة وشفافة.',
          'تدريب أعضاء هيئة التدريس على تقنيات التقييم الحديثة.',
          'تحليل نتائج الامتحانات لتحسين طرق التعليم.'
        ],
        coordinator: 'د. رمضان عيد',
        activities: [
          {
            id: 'electronic-correction',
            name: 'التصحيح الإلكتروني للامتحانات',
            description: 'التنفيذ الكامل لتسجيل درجات الامتحانات رقميًا'
          },
          {
            id: 'assessment-workshops',
            name: 'ورش عمل تصميم التقييم',
            description: 'تدريب على إنشاء أسئلة امتحانات فعالة'
          }
        ]
      }
    },

    // === 4. وحدة تكنولوجيا المعلومات (IT) ===
    {
      id: 'it-unit',
      name: 'وحدة تكنولوجيا المعلومات (IT)',
      shortName: 'وحدة IT',
      description: 'توفر البنية التحتية التكنولوجية والخدمات الرقمية لدعم التعليم والتعلّم والإدارة.',
      image: './assets/img.png',
      icon: 'pi pi-desktop',
      establishedDate: '2019',
      category: ServiceCategory.LANGUAGE_CENTER,
      route: '/services/it-unit',
      contact: {
        email: 'it.support@alsun.luxor.edu.eg',
        phone: '095-238-1234'
      },
      details: {
        description: 'تهدف وحدة تكنولوجيا المعلومات إلى تزويد الكلية وأعضائها - من أعضاء هيئة التدريس، والموظفين، والطلاب - بخدمات تكنولوجية متنوعة، وتقديم الدعم اللازم لتنظيم عمليات التعليم والتعلّم بناءً على أنظمة وتكنولوجيا المعلومات. كما تفعل البريد الإلكتروني الرسمي للجامعة كأداة تواصل رئيسية وتؤسس مكتبة إلكترونية.',
        objectives: [
          'صيانة وتحديث البنية التحتية لتكنولوجيا المعلومات عبر الكلية.',
          'توفير الدعم الفني لمنصات التعليم الرقمية.',
          'إدارة البريد الإلكتروني الرسمي للجامعة وأنظمة التواصل.',
          'تطوير وصيانة المكتبة الرقمية للكلية والموارد عبر الإنترنت.'
        ],
        coordinator: 'المهندس خالد سعيد',
        activities: [
          {
            id: 'tech-support',
            name: 'مكتب الدعم الفني',
            description: 'دعم تقني على مدار الساعة لأعضاء هيئة التدريس والطلاب'
          },
          {
            id: 'digital-library',
            name: 'خدمات المكتبة الرقمية',
            description: 'الوصول إلى الكتب الإلكترونية، والمجلات، وقواعد بيانات البحث'
          },
          {
            id: 'lms-management',
            name: 'نظام إدارة التعلّم',
            description: 'دعم منصات Moodle والدورات التعليمية عبر الإنترنت'
          }
        ]
      }
    },

    // === 5. وحدة متابعة الخريجين ===
    {
      id: 'graduate-followup-unit',
      name: 'وحدة متابعة الخريجين',
      shortName: 'وحدة الخريجين',
      description: 'تربط الخريجين بسوق العمل وتوفر فرص التطوير المهني المستمر.',
      image: './assets/img.png',
      icon: 'pi pi-users',
      establishedDate: '2021',
      category: ServiceCategory.LANGUAGE_CENTER,
      route: '/services/graduate-followup-unit',
      contact: {
        email: 'alumni@alsun.luxor.edu.eg',
        website: 'https://alumni.alsun.luxor.edu.eg'
      },
      details: {
        description: 'تهدف وحدة متابعة الخريجين إلى رفع المستوى الفني والمهني لطلاب وخريجي كلية الألسن، وتعزيز كفاءتهم، وتطوير قدراتهم ليصبحوا قادرين على المنافسة في سوق العمل. تقوم بإنشاء قنوات تواصل مستمرة مع الخريجين، ومتابعة أدائهم، وتحسينه من خلال برامج تدريبية، وورش عمل، وأنشطة متنوعة.',
        objectives: [
          'بناء قاعدة بيانات شاملة وشبكة تواصل للخريجين.',
          'تنظيم ورش عمل تطوير مهني ومعارض وظيفية.',
          'تتبع معدلات توظيف الخريجين وتقدمهم المهني.',
          'تقديم برامج تعليم مدى الحياة وشهادات للخريجين.'
        ],
        coordinator: 'د. صفاء علي',
        activities: [
          {
            id: 'career-fair',
            name: 'معرض الوظائف السنوي',
            description: 'يربط الخريجين بأصحاب العمل في قطاعات اللغة والترجمة'
          },
          {
            id: 'alumni-mentorship',
            name: 'برنامج الإرشاد للخريجين',
            description: 'يقوم خريجون كبار بإرشاد الطلاب الحاليين'
          },
          {
            id: 'professional-courses',
            name: 'دورات التطوير المهني',
            description: 'تدريب متخصص في الترجمة، والتفسير، والمهارات الناعمة'
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
}