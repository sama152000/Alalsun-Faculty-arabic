import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DeanInfo, ViceDean, HistoryEvent, VisionMission, FooterSection, SocialLink, ContactInfo } from '../model/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private deanInfo: DeanInfo = {
    id: 'dean-1',
    name: 'الأستاذ الدكتور محمود النوبي أحمد سليمان',
    position: 'عميد كلية الألسن - جامعة الأقصر',
    photo: 'assets/Picture1.jpg',
    greeting: 'أيها الطلاب الأعزاء، أعضاء هيئة التدريس الموقرين، مساعدي التدريس، وأعضاء الإدارة في الكلية، والزوار للموقع الرسمي لكلية الألسن بجامعة الأقصر.',
    message: [
      'تم إنشاء كلية الألسن بجامعة الأقصر بموجب المرسوم الجمهوري رقم 2693 لسنة 2016، الصادر في 14 محرم 1438 هـ، الموافق 15 أكتوبر 2016.',
      'تقف كلية الألسن كمؤسسة أكاديمية متميزة في مجال اللغات والترجمة. وتواصل إرث رواد مصر في الترجمة، كونها جسرًا بين الثقافات وأداة حيوية لنقل المعرفة والعلوم من جميع أنحاء العالم. تتكون الكلية من ثمانية أقسام أكاديمية: اللغة العربية (بمسارين، عربي للناطقين به ولغير الناطقين)، الإنجليزية، الفرنسية، الألمانية، الإيطالية، الإسبانية، الروسية، والصينية.',
      'بما يتماشى مع رؤية مصر 2030، ملتزمة الكلية بتقديم تعليم أكاديمي عالي الجودة بناءً على مناهج حديثة وطرق تدريس مبتكرة. هدفنا هو تخريج محترفين مؤهلين مزودين بالمهارات اللغوية والأكاديمية اللازمة لتلبية احتياجات سوق العمل المحلي والدولي. تسعى الكلية أيضًا إلى تعزيز الأبحاث العلمية وتقديم برامج دراسات عليا متقدمة تشجع على الإبداع والابتكار في مجال اللغات والترجمة.',
      'نسعى لتعزيز بيئة تعليمية شاملة من خلال دعم أنشطة الطلاب، وتعزيز الشراكات الأكاديمية مع الجامعات ومؤسسات البحث المحلية والدولية، وتقديم فرص تدريب عملي تمكن طلابنا من اكتساب خبرة عملية حقيقية ونجاحهم في حياتهم المهنية.'
    ],
    highlight: 'نؤمن أن اللغات ليست مجرد أدوات للتواصل، بل بوابات لفهم الحضارات الأخرى وأدوات أساسية لتعزيز الحوار بين الثقافات والارتباط الإنساني.',
    callToAction: 'أدعوكم جميعًا، الطلاب وأعضاء هيئة التدريس والموظفين، للمساهمة النشطة في تطوير الكلية، والعمل معًا لتحقيق رسالتها في خدمة المجتمع ورفع مستوى التعليم والبحث العلمي.',
    closing: [
      'نسأل الله أن يهدينا جميعًا للنجاح ويبارك في سعينا للمعرفة.',
      'السلام والبركة عليكم.'
    ]
  };

  private viceDeans: ViceDean[] = [
    {
      id: 'vice-dean-1',
      name: 'الأستاذ الدكتور محمد أحمد سيد حمزة',
      position: 'وكيل الكلية لشؤون التعليم وشؤون الطلاب',
      image: 'assets/Picture2.jpg',
      sector: 'شؤون التعليم والطلاب',
      email: 'education@luxor.edu.eg',
      office: 'مبنى الكلية - الدور الأول، الغرفة 105',
      message: [
        'مرحبًا بكم في قطاع شؤون التعليم وشؤون الطلاب في كليتنا الموقرة للألسن. كوكيل للكلية، أنا ملتزم بضمان حصول كل طالب على دعم تعليمي استثنائي وخدمات شاملة طوال رحلته الأكاديمية.',
        'يركز قطاعنا على تعزيز بيئة تعليمية شاملة يمكن فيها للطلاب الازدهار أكاديميًا وشخصيًا ومهنيًا. نقدم خدمات دعم شاملة تشمل الإرشاد الأكاديمي، والإرشاد المهني، وأنشطة الطلاب، وبرامج الرفاهية.',
        'نؤمن بقوة التعليم التحويلية ونلتزم بإعداد طلابنا ليصبحوا مواطنين عالميين وقادة في مجالاتهم المختارة. من خلال البرامج المبتكرة والدعم الشخصي، نحرص على أن يحقق كل طالب إمكاناته الكاملة.',
        'أشجع جميع الطلاب على المشاركة النشطة في خدماتنا والاستفادة من الفرص العديدة المتاحة للنمو الشخصي والمهني.'
      ]
    },
    {
      id: 'vice-dean-2',
      name: 'الأستاذ الدكتور يوسف عباس علي',
      position: 'وكيل الكلية لشؤون الدراسات العليا وتميز البحث العلمي',
      image: 'assets/Picture5.jpg',
      sector: 'الدراسات العليا والبحث العلمي',
      email: 'postgraduate@luxor.edu.eg',
      office: 'مركز تميز البحث - مبنى أ، الدور الثالث، الجناح 301',
      message: [
        'يُمثل قطاع الدراسات العليا والبحث العلمي قمة التميز الأكاديمي في كليتنا. نحن ملتزمون بتطوير المعرفة من خلال البحث العلمي الدقيق والعلمية المبتكرة.',
        'برامجنا العليا الشاملة مصممة لتطوير التفكير النقدي، ومهارات البحث، والخبرة العلمية. نقدم منشآت بحثية متطورة وإرشادًا من أعضاء هيئة تدريس متميزين.',
        'نعزز بيئة بحثية تعاونية تشجع على الدراسات متعددة التخصصات والشراكات الدولية. يساهم خريجونا بشكل كبير في المعرفة الأكاديمية والممارسة المهنية في مجالاتهم المختلفة.',
        'أدعو الباحثين والعلماء المحتملين للانضمام إلى مجتمعنا الأكاديمي النشط والمساهمة في تطوير المعرفة في اللغات، الترجمة، والدراسات الثقافية.'
      ]
    },
    {
      id: 'vice-dean-3',
      name: 'الأستاذ الدكتور محمود حمزة محمد',
      position: 'وكيل الكلية لخدمة المجتمع والتنمية البيئية',
      image: 'assets/Picture3.jpg',
      sector: 'خدمة المجتمع والتنمية البيئية',
      email: 'community@luxor.edu.eg',
      office: 'مركز التفاعل مع المجتمع - مبنى إي، الدور الثاني، الجناح 205',
      message: [
        'يُشكل قطاع خدمة المجتمع والتنمية البيئية جسرًا بين مؤسستنا الأكاديمية والمجتمع الأوسع. نحن ملتزمون بخلق تأثير اجتماعي وبيئي إيجابي من خلال مبادراتنا.',
        'برامجنا الشاملة تعالج احتياجات المجتمع مع تعزيز الاستدامة البيئية والمسؤولية الاجتماعية. نشارك الطلاب، أعضاء هيئة التدريس، وأعضاء المجتمع في مشاريع ذات معنى تخلق تغييرًا دائمًا.',
        'من خلال الشراكات مع المنظمات المحلية والوكالات الدولية، ننفذ تدخلات قائمة على الأدلة التي تعالج التحديات الاجتماعية والبيئية الملحة.',
        'ندعو جميع أعضاء مجتمعنا الأكاديمي للمشاركة في رسالتنا في خدمة المجتمع والحفاظ على البيئة، مساهمين في مستقبل أكثر استدامة وعدالة.'
      ]
    }
  ];

  private historyEvents: HistoryEvent[] = [
    {
      id: 'history-1',
      year: '2016',
      title: 'تأسيس الكلية',
      description: 'تم تأسيس كلية الألسن بمرسوم رئيس الوزراء رقم 2693 في عام 2016، مما يمثل بداية عصر جديد في تعليم اللغات بجامعة الأقصر.',
      icon: 'pi pi-flag'
    },
    {
      id: 'history-2',
      year: '2016/2017',
      title: 'السنة الأكاديمية الأولى',
      description: 'بدأت السنة الأكاديمية الأولى في 2016/2017 بعدد محدود من الأقسام، مما وضع الأساس لبرامج تعليم اللغات الشاملة.',
      icon: 'pi pi-graduation-cap'
    },
    {
      id: 'history-3',
      year: '2017-2020',
      title: 'التوسع التدريجي',
      description: 'توسعت الكلية تدريجيًا لتشمل ثمانية أقسام لغوية، تقدم برامج متنوعة في العربية، الإنجليزية، الفرنسية، الألمانية، الإيطالية، الإسبانية، الروسية، والصينية.',
      icon: 'pi pi-building'
    },
    {
      id: 'history-4',
      year: '2020-الآن',
      title: 'التميز والنمو',
      description: 'منذ تأسيسها، تسعى الكلية لتقديم تعليم عالي الجودة في اللغات والترجمة، تطوير برامجها الأكاديمية، ودعم البحث العلمي وخدمة المجتمع.',
      icon: 'pi pi-star'
    }
  ];

  private visionMission: VisionMission[] = [
    {
      id: 'vision',
      type: 'vision',
      title: 'رؤيتنا',
      icon: 'pi pi-eye',
      content: [
        'تسعى كلية الألسن (اللغات) لتحقيق التميز والقيادة في جميع مجالات المعرفة المتعلقة بدراسة اللغات المتعددة، بهدف تميزها، وتقدم المجتمع علميًا وثقافيًا، والتنافس على المستويين المحلي والدولي.'
      ]
    },
    {
      id: 'mission',
      type: 'mission',
      title: 'رسالتنا',
      icon: 'pi pi-compass',
      content: [
        'تأهيل خريجي اللغات المختلفة لخدمة المجتمع والبيئة في مجالات الترجمة، وتطوير الذات، وفهم الآخرين، مع الحفاظ على الهوية والعمل لمواكبة الازدهار.',
        'دعم الطلاب ثقافيًا وفنيًا ورياضيًا، وتطوير المهارات اللازمة لإتقان اللغة الأم، واللغة المتخصصة، واللغة المساعدة.',
        'صقل مهارات الطلاب لتلبية الاحتياجات الفعلية لسوق العمل والمجتمع.'
      ]
    }
  ];

  private footerSections: FooterSection[] = [
    {
      title: 'روابط سريعة',
      links: [
        { title: 'من نحن', url: '/alalsun-faculty/about' },
        { title: 'الأقسام', url: '/alalsun-faculty/departments' },
        { title: 'أعضاء هيئة التدريس', url: '/alalsun-faculty/staff' },
        { title: 'أخبار', url: '/alalsun-faculty/news' },
        { title: 'اتصل بنا', url: '/alalsun-faculty/contact' }
      ]
    },
    {
      title: 'أكاديمي',
      links: [
        { title: 'الدراسات العليا', url: '/postgraduate' },
        { title: 'مراكز البحث', url: '/research' },
        { title: 'مجلة الألسن', url: '/journal' },
        { title: 'التقويم الأكاديمي', url: '/calendar' }
      ]
    },
    {
      title: 'مصادر',
      links: [
        { title: 'مركز اللغة والترجمة', url: '/centers/translation' },
        { title: 'فصل الكونفوشيوس', url: '/centers/confucius' },
        { title: 'بوابة الطلاب', url: '/student-portal' },
        { title: 'المكتبة', url: '/library' }
      ]
    }
  ];

  private socialLinks: SocialLink[] = [
    {
      platform: 'فيسبوك',
      url: 'https://facebook.com/alsunluxor',
      icon: 'pi pi-facebook',
      label: 'فيسبوك'
    },
    {
      platform: 'يوتيوب',
      url: 'https://youtube.com/alsunluxor',
      icon: 'pi pi-youtube',
      label: 'يوتيوب'
    },
    {
      platform: 'لينكدإن',
      url: 'https://linkedin.com/school/alsunluxor',
      icon: 'pi pi-linkedin',
      label: 'لينكدإن'
    },
    {
      platform: 'تويتر',
      url: 'https://twitter.com/alsunluxor',
      icon: 'pi pi-twitter',
      label: 'تويتر'
    }
  ];

  private contactInfo: ContactInfo = {
    phone: '+20952356555',
    email: 'info@alsun.luxor.edu.eg',
    address: 'كلية الألسن، جامعة الأقصر، الأقصر، مصر'
  };

  getDeanInfo(): Observable<DeanInfo> {
    return of(this.deanInfo);
  }

  updateDeanInfo(updatedDean: DeanInfo): Observable<void> {
    this.deanInfo = updatedDean;
    return of(void 0);
  }

  addDeanInfo(newDean: DeanInfo): Observable<void> {
    this.deanInfo = {
      ...newDean,
      id: 'dean-1' // نحتفظ بالمعرف نفسه لأنه هناك عميد واحد فقط
    };
    return of(void 0);
  }

  getAllViceDeans(): Observable<ViceDean[]> {
    return of(this.viceDeans);
  }

  getViceDeanById(id: string): Observable<ViceDean | undefined> {
    const viceDean = this.viceDeans.find(vd => vd.id === id);
    return of(viceDean);
  }

  addViceDean(newViceDean: ViceDean): Observable<void> {
    newViceDean.id = 'vice-dean-' + (this.viceDeans.length + 1);
    this.viceDeans.push(newViceDean);
    return of(void 0);
  }

  updateViceDean(updatedViceDean: ViceDean): Observable<void> {
    const index = this.viceDeans.findIndex(vd => vd.id === updatedViceDean.id);
    if (index !== -1) {
      this.viceDeans[index] = updatedViceDean;
    }
    return of(void 0);
  }

  deleteViceDean(id: string): Observable<void> {
    this.viceDeans = this.viceDeans.filter(vd => vd.id !== id);
    return of(void 0);
  }

  getHistoryEvents(): Observable<HistoryEvent[]> {
    return of(this.historyEvents);
  }

  addHistoryEvent(newEvent: HistoryEvent): Observable<void> {
    newEvent.id = 'history-' + (this.historyEvents.length + 1);
    this.historyEvents.push(newEvent);
    return of(void 0);
  }

  updateHistoryEvent(updatedEvent: HistoryEvent): Observable<void> {
    const index = this.historyEvents.findIndex(e => e.id === updatedEvent.id);
    if (index !== -1) {
      this.historyEvents[index] = updatedEvent;
    }
    return of(void 0);
  }

  deleteHistoryEvent(id: string): Observable<void> {
    this.historyEvents = this.historyEvents.filter(e => e.id !== id);
    return of(void 0);
  }

  getVisionMission(): Observable<VisionMission[]> {
    return of(this.visionMission);
  }

  addVisionMission(newVM: VisionMission): Observable<void> {
    newVM.id = 'vm-' + (this.visionMission.length + 1);
    this.visionMission.push(newVM);
    return of(void 0);
  }

  updateVisionMission(updatedVM: VisionMission): Observable<void> {
    const index = this.visionMission.findIndex(vm => vm.id === updatedVM.id);
    if (index !== -1) {
      this.visionMission[index] = updatedVM;
    }
    return of(void 0);
  }

  deleteVisionMission(id: string): Observable<void> {
    this.visionMission = this.visionMission.filter(vm => vm.id !== id);
    return of(void 0);
  }

  getFooterSections(): Observable<FooterSection[]> {
    return of(this.footerSections);
  }

  addFooterSection(newSection: FooterSection): Observable<void> {
    this.footerSections.push(newSection);
    return of(void 0);
  }

  updateFooterSection(updatedSection: FooterSection, index: number): Observable<void> {
    if (index >= 0 && index < this.footerSections.length) {
      this.footerSections[index] = updatedSection;
    }
    return of(void 0);
  }

  deleteFooterSection(index: number): Observable<void> {
    if (index >= 0 && index < this.footerSections.length) {
      this.footerSections.splice(index, 1);
    }
    return of(void 0);
  }

  getSocialLinks(): Observable<SocialLink[]> {
    return of(this.socialLinks);
  }

  addSocialLink(newLink: SocialLink): Observable<void> {
    this.socialLinks.push(newLink);
    return of(void 0);
  }

  updateSocialLink(updatedLink: SocialLink, index: number): Observable<void> {
    if (index >= 0 && index < this.socialLinks.length) {
      this.socialLinks[index] = updatedLink;
    }
    return of(void 0);
  }

  deleteSocialLink(index: number): Observable<void> {
    if (index >= 0 && index < this.socialLinks.length) {
      this.socialLinks.splice(index, 1);
    }
    return of(void 0);
  }

  getContactInfo(): Observable<ContactInfo> {
    return of(this.contactInfo);
  }

  updateContactInfo(updatedContact: ContactInfo): Observable<void> {
    this.contactInfo = updatedContact;
    return of(void 0);
  }
}