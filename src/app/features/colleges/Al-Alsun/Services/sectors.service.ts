import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SectorData, ViceDeanInfo, SectorDepartment, SectorService, NewsItem, MediaItem, SectorStatistic, ActivityItem, Achievement } from '../model/sector.model';

@Injectable({
  providedIn: 'root'
})
export class SectorsService {
  private sectors: SectorData[] = [
    {
      id: 'education-students',
      name: 'شؤون التعليم وشؤون الطلاب',
      title: 'قطاع شؤون التعليم وشؤون الطلاب',
      description: `يُعد قطاع شؤون التعليم وشؤون الطلاب حجر الأساس للتميز الأكاديمي وقوة الطلاب في مؤسستنا. نهجنا الشامل للتعليم يشمل ليس فقط المطالب الأكاديمية التقليدية، بل أيضًا التطوير الشامل للطلاب كقادة ومبتكرين ومواطنين عالميين في المستقبل. نحن ملتزمون بتوفير بيئة شاملة وديناميكية وداعمة تعزز الفضول الفكري، التفكير النقدي، والنمو الشخصي. من خلال أقسامنا المتنوعة والبرامج المتخصصة، نحن نضمن أن يتلقى كل طالب اهتمامًا شخصيًا ووصولاً إلى موارد حديثة تحضره للنجاح في عالم متغير باستمرار. يدعم قطاعنا التنوع، ويعزز المساواة، ويحفز ثقافة التعلم المستمر والابتكار.`,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      viceDean: {
        name: 'أ.د. محمد أحمد سيد حمزة',
        title: 'وكيل الكلية لشؤون التعليم وشؤون الطلاب',
        photo: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        email: 'education@luxor.edu.eg',
        office: 'مبنى الكلية - الدور الأول، الغرفة 105'
      },
      departments: [
        {
          id: 'enrollment-registration',
          name: 'قسم التسجيل الأكاديمي وتسجيل الطلاب',
          overview: 'يُعد قسم التسجيل الأكاديمي وتسجيل الطلاب البوابة الرئيسية للطلاب الداخلين إلى مجتمعنا الأكاديمي. نحن نُدير عمليات التسجيل الشاملة، وأنظمة التسجيل الأكاديمي، ونحتفظ بسجلات الطلاب التفصيلية طوال رحلتهم الأكاديمية.',
          responsibilities: [
            'معالجة ومراجعة طلبات الطلاب الجدد بمعايير تقييم شاملة',
          ],
          contact: {
            email: 'enrollment@luxor.edu.eg',
            office: 'مبنى خدمات الطلاب - الدور الأرضي، الجناح 110-115',
            phone: '+20 95 237 1001'
          }
        },
        {
          id: 'examination-results',
          name: 'قسم إدارة الامتحانات والتقييم الأكاديمي',
          overview: 'يضمن قسم إدارة الامتحانات والتقييم الأكاديمي النزاهة والتميز الأكاديمي من خلال عمليات امتحانية شاملة، إجراءات تقييم عادلة، وأنظمة إدارة نتائج شفافة.',
          responsibilities: [
            'تطوير وتنفيذ جداول وبرتوكولات الامتحانات الشاملة',
          ],
          contact: {
            email: 'exams@luxor.edu.eg',
            office: 'مبنى الشؤون الأكاديمية - الدور الثاني، الغرف 201-206',
            phone: '+20 95 237 1002'
          }
        },
        {
          id: 'student-activities',
          name: 'قسم الحياة الطلابية والأنشطة اللامنهجية',
          overview: 'يثري قسم الحياة الطلابية والأنشطة اللامنهجية التجربة الجامعية من خلال توفير فرص متنوعة للتطور الشخصي، التفاعل الثقافي، وبناء المجتمع من خلال برمجة شاملة.',
          responsibilities: [
            'تنظيم فعاليات ثقافية شاملة، مهرجانات، وعروض فنية',
          ],
          contact: {
            email: 'activities@luxor.edu.eg',
            office: 'مركز الأنشطة الطلابية - مبنى ب، جميع الأدوار',
            phone: '+20 95 237 1003'
          }
        },
        {
          id: 'student-support',
          name: 'قسم دعم الطلاب وخدمات الرفاهية',
          overview: 'مكرس لضمان رفاهية الطلاب والنجاح من خلال خدمات دعم شاملة، برامج المساعدات المالية، وأنظمة التدخل في الأزمات.',
          responsibilities: [
            'توفير إرشاد أكاديمي شامل وخدمات استشارية مهنية',
          ],
          contact: {
            email: 'support@luxor.edu.eg',
            office: 'مركز رفاهية الطلاب - مبنى ج، الدورين 1-2',
            phone: '+20 95 237 1004'
          }
        },
        {
          id: 'technology-innovation',
          name: 'قسم التكنولوجيا التعليمية والابتكار',
          overview: 'يقود التحول الرقمي في التعليم من خلال حلول تكنولوجية مبتكرة، منصات التعلم عبر الإنترنت، ومبادرات الحرم الذكي.',
          responsibilities: [
            'تطوير وصيانة أنظمة إدارة التعلم والمنصات الرقمية',
          ],
          contact: {
            email: 'techsupport@luxor.edu.eg',
            office: 'مركز التكنولوجيا - مبنى د، الدور الثالث',
            phone: '+20 95 237 1005'
          }
        }
      ],
      services: [
        {
          id: 'comprehensive-enrollment',
          name: 'خدمات التسجيل والقبول الشاملة',
          description: 'عملية تسجيل سلسة تضمن انتقالًا سلسًا إلى الحياة الجامعية مع دعم شخصي وإرشاد شامل طوال رحلة القبول.',
          steps: [
            'أكمل نموذج الطلب عبر الإنترنت بمعلومات أكاديمية وشخصية مفصلة',
          ],
          requiredDocuments: [
            'شهادة الثانوية العامة الرسمية أو ما يعادلها (الأصل والنسخ المصدقة)',
            'عينات عمل إبداعي أو ملف شخصي للبرامج الملائمة'
          ],
          downloadableForms: [
            'نموذج طلب الطالب (PDF)',
          ]
        },
        {
          id: 'academic-credentials',
          name: 'خدمات الشهادات الأكاديمية والتوثيق',
          description: 'خدمات اعتماد شاملة توفر وثائق أكاديمية رسمية، هوية الطالب، وخدمات التحقق للاستخدام المحلي والدولي.',
          steps: [
            'قدم نموذج طلب تفصيلي يحدد نوع الوثيقة والاستخدام المقصود',
          ],
          requiredDocuments: [
            'بطاقة هوية الطالب الحالية أو التحقق من خريج',
          ],
          downloadableForms: [
            'نموذج طلب الشهادة (PDF)',
          ]
        },
        {
          id: 'comprehensive-housing',
          name: 'خدمات السكن الشامل وأسلوب الحياة الطلابي',
          description: 'برامج سكنية شاملة توفر بيئات معيشة آمنة ومريحة وداعمة أكاديميًا مع وسائل راحة شاملة وبرمجة مجتمعية.',
          steps: [
            'أكمل طلب السكن أثناء التسجيل الأولي أو فترة التقديم المبكر',
          ],
          requiredDocuments: [
            'طلب سكن مكتمل بتفاصيل التفضيلات والمتطلبات',
          ],
          downloadableForms: [
            'نموذج طلب السكن (PDF)',
          ]
        },
        {
          id: 'career-development',
          name: 'خدمات التطوير المهني والتحضير الاحترافي',
          description: 'خدمات مهنية شاملة تشمل التطوير الاحترافي، تنسيق التدريب العملي، مساعدة في التوظيف، والدعم المهني مدى الحياة.',
          steps: [
            'أكمل تقييم المهنة وتقييم المصالح الاحترافية',
            'احصل على مساعدة في التوظيف والدعم المهني بعد التخرج'
          ],
          requiredDocuments: [
            'سجلات أكاديمية محدثة وشهادات إكمال المقررات',
          ],
          downloadableForms: [
            'نموذج تسجيل خدمات المهنة (PDF)',
          ]
        },
        {
          id: 'international-programs',
          name: 'برامج التبادل الدولي والدراسة في الخارج',
          description: 'فرص تعليمية عالمية من خلال شراكات دولية، برامج التبادل، ومبادرات الدراسة في الخارج مع خدمات دعم شاملة.',
          steps: [
            'احضر جلسات معلومات برامج التبادل الدولي والتوجيه الثقافي',
          ],
          requiredDocuments: [
            'جواز سفر صالح مع وثائق التأشيرة المناسبة',
          ],
          downloadableForms: [
            'نموذج طلب التبادل الدولي (PDF)',
          ]
        }
      ],
      news: [
        {
          id: 'news-1',
          title: 'فتح التسجيل للعام الدراسي الجديد 2024-2025 مع منصة رقمية محسّنة',
          summary: 'إطلاق نظام تسجيل عبر الإنترنت ثوري للعام الدراسي الجديد، يتميز بتوصيات المقررات المدعومة بالذكاء الاصطناعي، التخطيط الأكاديمي المتكامل، وعمليات التسجيل المبسطة.',
          date: '2024-08-15',
          image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          category: 'إعلانات أكاديمية'
        },
        {
          id: 'news-2',
          title: 'أسبوع الأنشطة الطلابية الدولية 2024: الاحتفال بالتنوع العالمي',
          summary: 'احتفال أسبوعي يضم مهرجانات ثقافية، مأكولات دولية، عروض تقليدية، وورش عمل مواطنة عالمية بدعم من 25 دولة.',
          date: '2024-09-10',
          image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          category: 'فعاليات ثقافية'
        },
      ],
      media: [
        {
          id: 'media-1',
          title: 'يوم التوجيه الطلابي 2024: بناء قادة الغد',
          type: 'photo',
          url: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
          description: 'معرض صور شامل من يوم التوجيه الطلابي يتضمن جولات في الحرم الجامعي، معارض أكاديمية، ومراسيم ترحيب الطلاب الجدد',
          date: '2024-09-01'
        },
        {
          id: 'media-2',
          title: 'مهرجان الثقافة السنوي: احتفال بأوحدية التنوع',
          type: 'video',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          thumbnail: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
          description: 'نقاط بارزة من مهرجان الثقافة السنوي يعرض العروض الدولية، معارض الفنون، والاحتفالات المجتمعية',
          date: '2024-10-15'
        },
      ],
      statistics: [
        { label: 'الطلاب المسجلين', value: '3,750', icon: 'pi pi-users' },
        { label: 'الأنشطة السنوية', value: '125', icon: 'pi pi-star' },
        { label: 'الخدمات المقدمة', value: '8,400', icon: 'pi pi-check-circle' },
        { label: 'رضا الطلاب', value: '97%', icon: 'pi pi-heart' },
        { label: 'الطلاب الدوليون', value: '480', icon: 'pi pi-globe' },
        { label: 'المنح الممنوحة', value: '290', icon: 'pi pi-trophy' },
        { label: 'معدل التوظيف', value: '94%', icon: 'pi pi-briefcase' },
        { label: 'مشاريع البحث', value: '156', icon: 'pi pi-search' }
      ],
      activities: [
        {
          id: 'activity-1',
          title: 'بطولة المنافسات اللغوية الدولية',
          description: 'منافسة متعددة اللغات سنوية تشمل 12 لغة مع تبادل ثقافي وتحديات ترجمة',
          date: '2024-03-15',
          type: 'منافسة أكاديمية',
          image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg'
        },
        {
          id: 'activity-2',
          title: 'مبادرة برنامج التبادل الثقافي العالمي',
          description: 'برنامج تبادل طلابي دولي مع جامعات شريكة في أوروبا، آسيا، والأمريكتين',
          date: '2024-05-20',
          type: 'برنامج دولي',
          image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg'
        },
      ],
      achievements: [
        {
          id: 'achievement-1',
          title: 'جائزة التميز الوطني في خدمات الطلاب 2024',
          description: 'تم الاعتراف بها وطنيًا لخدمات دعم الطلاب المتميزة، البرامج الابتكارية، ومعدلات رضا الطلاب الاستثنائية',
          date: '2024-06-10',
          image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg'
        },
      ]
    },
    {
      id: 'postgraduate-research',
      name: 'الدراسات العليا والبحث العلمي',
      title: 'قطاع الدراسات العليا وتميز البحث العلمي',
      description: `يُمثل قطاع الدراسات العليا والبحث العلمي ذروة الإنجاز الأكاديمي والتميز العلمي ضمن مؤسستنا. نحن ملتزمون بتعزيز نظام بحثي نابض بالحياة يعزز الابتكار، التفكير النقدي، واكتشافات رائدة عبر التخصصات الأكاديمية المتنوعة. نهجنا الشامل للتعليم العالي يجمع بين التدريب الأكاديمي الصارم والخبرة البحثية العملية، مما يُعد العلماء ليصبحوا قادة في مجالاتهم ومساهمين في المعرفة العالمية. من خلال الشراكات الاستراتيجية مع المؤسسات الدولية، والمرافق البحثية المتطورة، والإرشاد من هيئة تدريس مرموقة، نُنشئ بيئة تتألق فيها الفضول الفكري وتظهر الأبحاث التحويلية. تمتد التزاماتنا خارج الحدود التقليدية، تشمل التعاون بين التخصصات، التفاعل مع المجتمع، وتطبيق النتائج البحثية عمليًا لمعالجة التحديات العالمية الحقيقية.`,
      image: 'https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      viceDean: {
        name: 'أ.د. يوسف عباس علي',
        title: 'وكيل الكلية للدراسات العليا وتميز البحث العلمي',
        photo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        email: 'postgraduate@luxor.edu.eg',
        office: 'مركز تميز البحث - مبنى أ، الدور الثالث، الجناح 301'
      },
      departments: [
        {
          id: 'graduate-admissions',
          name: 'قسم القبولات الدراسية العليا والتميز الأكاديمي',
          overview: 'يُدير قسم القبولات الدراسية العليا والتميز الأكاديمي عمليات القبول الشاملة لبرامج الماجستير والدكتوراه مع الحفاظ على أعلى معايير التميز الأكاديمي والنزاهة البحثية.',
          responsibilities: [
            'إدارة عمليات طلبات الماجستير والدكتوراه الشاملة بمعايير دولية',
            'دعم تطوير الطلاب الدراسيين المهني وتقدمهم الوظيفي'
          ],
          contact: {
            email: 'pg.admissions@luxor.edu.eg',
            office: 'مبنى الدراسات العليا - الدور الأول، جناح القبولات',
            phone: '+20 95 237 2001'
          }
        },
        {
          id: 'research-development',
          name: 'قسم تطوير البحث والابتكار',
          overview: 'مكرس لتعزيز التميز البحثي من خلال خدمات دعم شاملة، الحصول على التمويل، ومبادرات تجارة الابتكار.',
          responsibilities: [
            'تطوير وتنفيذ استراتيجية وأولويات البحث المؤسسي',
            'إدارة عمليات حماية الملكية الفكرية والتجارة'
          ],
          contact: {
            email: 'research.dev@luxor.edu.eg',
            office: 'مركز الابتكار البحثي - مبنى ب، الدورين 2-3',
            phone: '+20 95 237 2002'
          }
        },
        {
          id: 'thesis-dissertation',
          name: 'قسم إدارة الرسائل والأطروحات',
          overview: 'رقابة شاملة على عمليات الرسائل والأطروحات من الفكرة إلى الإكمال، وضمان التميز الأكاديمي والنزاهة البحثية طوال الرحلة العلمية.',
          responsibilities: [
            'إدارة عمليات الموافقة على مقترحات الرسائل والأطروحات',
            'تنسيق جدولة الامتحانات الشاملة والتقييم',
            'توفير الدعم الإحصائي والتقني لتحليل البحث'
          ],
          contact: {
            email: 'thesis.mgmt@luxor.edu.eg',
            office: 'مبنى البحث الأكاديمي - الدور الثاني، مركز الرسائل',
            phone: '+20 95 237 2003'
          }
        },
        {
          id: 'international-collaboration',
          name: 'قسم التعاون البحثي الدولي',
          overview: 'تعزيز الشراكات البحثية العالمية، برامج التبادل الدولي، ومبادرات البحث التعاوني التي توسع نطاق وتأثير البحث المؤسسي.',
          responsibilities: [
            'تطوير شراكات استراتيجية مع المؤسسات البحثية الدولية',
            'تسهيل تدريب الكفاءة الثقافية للتعاون الدولي'
          ],
          contact: {
            email: 'international.research@luxor.edu.eg',
            office: 'مركز البحث الدولي - مبنى ج، الدور الأول',
            phone: '+20 95 237 2004'
          }
        }
      ],
      services: [
        {
          id: 'comprehensive-graduate-admission',
          name: 'خدمات القبول الدراسي العالي والاختيار البرنامجي الشاملة',
          description: 'عملية قبول سلسة لبرامج الماجستير والدكتوراه مع استشارات أكاديمية شخصية، تطابق مجال البحث، ودعم شامل طوال رحلة التقديم.',
          steps: [
            'أكمل طلبًا عبر الإنترنت شاملاً بتفاصيل الخلفية الأكاديمية والبحثية',
          ],
          requiredDocuments: [
            'شهادة البكالوريوس الرسمية بمتطلبات المعدل الأدنى (للماجستير)',
          ],
          downloadableForms: [
            'نموذج طلب الدراسات العليا (PDF)',
          ]
        },
        {
          id: 'thesis-dissertation-support',
          name: 'خدمات دعم الرسائل والأطروحات الشاملة',
          description: 'دعم شامل من البداية إلى النهاية لإكمال الرسائل والأطروحات بما في ذلك المساعدة في الكتابة، التوجيه في التنسيق، تحضير الدفاع، ودعم النشر.',
          steps: [
            'سجل موضوع الرسالة أو الأطروحة مع موافقة القسم وتشكيل اللجنة',
          ],
          requiredDocuments: [
            'مقترح رسالة أو أطروحة موافق عليه بتوقيعات اللجنة',
          ],
          downloadableForms: [
            'نموذج تسجيل الرسالة (PDF)',
          ]
        }
      ],
      news: [
        {
          id: 'pg-news-1',
          title: 'دفاع دكتوراه متميز في الأدب المقارن والدراسات الثقافية',
          summary: 'أطروحة رائدة في تحليل السرد عبر الثقافات دافعت عنها مع مشاركة لجنة امتحان دولية عبر المنصة الرقمية.',
          date: '2024-12-05',
          image: 'https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg',
          category: 'دفاع أطروحة'
        },
        {
          id: 'pg-news-2',
          title: 'برنامج ماجستير ثوري في الإنسانيات الرقمية وتكنولوجيا الترجمة',
          summary: 'برنامج تفاعلي مبتكر يطلق في خريف 2025، يجمع بين دراسات الترجمة التقليدية مع الذكاء الاصطناعي والتكنولوجيا الرقمية.',
          date: '2024-11-15',
          image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
          category: 'ابتكار برنامج'
        },
      ],
      media: [
        {
          id: 'pg-media-1',
          title: 'مؤتمر التميز البحثي الدولي 2024',
          type: 'photo',
          url: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
          description: 'معرض صور شامل من مؤتمر البحث الدولي يتضمن المحاضرين الرئيسيين، عروض البحث، وجلسات التواصل',
          date: '2024-10-20'
        },
        {
          id: 'pg-media-2',
          title: 'نقاط بارزة من مراسم دفاع الدكتوراه المتميزة',
          type: 'video',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          thumbnail: 'https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg',
          description: 'مقاطع فيديو بارزة من مراسم دفاع الدكتوراه المتميزة تعرض التميز الأكاديمي والإنجاز العلمي',
          date: '2024-11-01'
        },
      ],
      statistics: [
        { label: 'طلاب الماجستير', value: '520', icon: 'pi pi-graduation-cap' },
        { label: 'مرشحو الدكتوراه', value: '185', icon: 'pi pi-star' },
        { label: 'المؤتمرات السنوية', value: '22', icon: 'pi pi-calendar' },
        { label: 'النشر البحثي', value: '340', icon: 'pi pi-book' }
      ],
      activities: [
        {
          id: 'pg-activity-1',
          title: 'ورشة عمل منهجيات البحث المتقدمة وتحليل الإحصاء',
          description: 'ورشة عمل مكثفة لمدة ثلاثة أيام تغطي طرق البحث الكمي والنوعي مع تدريب عملي على تحليل البيانات',
          date: '2024-09-25',
          type: 'ورشة أكاديمية',
          image: 'https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg'
        },
        {
          id: 'pg-activity-2',
          title: 'قمة التعاون البحثي والشراكات العالمية',
          description: 'قمة دولية تركز على بناء شراكات بحثية وفرص تعاونية مع المؤسسات العالمية',
          date: '2024-11-10',
          type: 'قمة دولية',
          image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg'
        }
      ],
      achievements: [
        {
          id: 'pg-achievement-1',
          title: 'جائزة التميز الدولي في التعليم الجامعي 2024',
          description: 'اعتراف دولي مرموق بالبرامج الجامعية المتميزة وتميز الإشراف البحثي',
          date: '2024-07-15',
          image: 'https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg'
        }
      ]
    },
    {
      id: 'community-environmental',
      name: 'خدمة المجتمع والتنمية البيئية',
      title: 'قطاع خدمة المجتمع والاستدامة البيئية',
      description: `يُعد قطاع خدمة المجتمع والتنمية البيئية الجسر الحيوي الذي يربط مؤسستنا الأكاديمية بالمجتمع الأوسع من خلال مبادرات تحويلية، مشاريع التنمية المستدامة، وبرامج إدارة البيئة الشاملة. تمتد مهمتنا بعيدًا عن الحدود الأكاديمية التقليدية، تشمل التفاعل المجتمعي الشامل، الحفاظ على البيئة، والمسؤولية الاجتماعية. نحن ملتزمون بخلق تأثير إيجابي مستدام من خلال التدخلات القائمة على الأدلة، الشراكات التعاونية، والحلول الابتكارية التي تعالج التحديات الاجتماعية والبيئية الحالية. نهجنا الشامل يدمج تقييم احتياجات المجتمع، مشاركة الأصحاب، ومبادئ التنمية المستدامة لضمان أن مبادراتنا تخلق فوائد طويلة الأمد ذات معنى لجميع أعضاء المجتمع مع تعزيز الاستدامة البيئية والعدالة الاجتماعية.`,
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      viceDean: {
        name: 'أ.د. محمود حمزة محمد',
        title: 'وكيل الكلية لخدمة المجتمع والاستدامة البيئية',
        photo: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        email: 'community@luxor.edu.eg',
        office: 'مركز التفاعل المجتمعي - مبنى إي، الدور الثاني، الجناح 205'
      },
      departments: [
        {
          id: 'environmental-sustainability',
          name: 'قسم الاستدامة البيئية والحفاظ',
          overview: 'مكرس لتعزيز إدارة البيئة من خلال مبادرات الاستدامة الشاملة، مشاريع الحفاظ، وحلول مبتكرة للتحديات البيئية.',
          responsibilities: [
            'تطوير سياسات الاستدامة المؤسسية وأنظمة إدارة البيئة',
            'تنفيذ برامج تقليل النفايات، إعادة التدوير، والاقتصاد الدائري الشامل',
            'إدارة مشاريع الطاقة المتجددة ومبادرات تقليل بصمة الكربون',
            'دعم مشاريع الزراعة المستدامة وأمن الغذاء في المجتمع'
          ],
          contact: {
            email: 'environment@luxor.edu.eg',
            office: 'مركز الأبحاث البيئية - مبنى ف، الدورين 1-2',
            phone: '+20 95 237 3002'
          }
        }
      ],
      services: [
        {
          id: 'comprehensive-training',
          name: 'برامج التدريب المجتمعي والتطوير الاحترافي الشاملة',
          description: 'برامج تدريبية موسعة مصممة لبناء قدرات المجتمع، تعزيز المهارات المهنية، وتعزيز التعلم مدى الحياة من خلال فرص تعليمية متنوعة.',
          steps: [
            'أكمل تقييم احتياجات المجتمع الشامل وتحليل الفجوات في المهارات',
            'تصفح كتالوج البرامج التدريبية المتاحة وورش العمل للتطوير الاحترافي',
            'شارك في شبكة الخريجين المستمرة وخدمات دعم التطوير الاحترافي'
          ],
          requiredDocuments: [
            'نموذج تسجيل مكتمل بتفاصيل الخلفية والأهداف',
            'طلب مساعدة مالية ووثائق داعمة إن وجدت'
          ],
          downloadableForms: [
            'نموذج تسجيل البرنامج التدريبي (PDF)',
            'قالب خطة التطوير الاحترافي (PDF)',
            'نموذج تقييم الأثر المجتمعي (PDF)',
            'نموذج طلب التحقق من الشهادة (PDF)'
          ]
        }
      ],
      news: [
        {
          id: 'comm-news-1',
          title: 'حملة الحفاظ البيئي التحويلية 2024: مبادرة الشراكة المجتمعية',
          summary: 'حملة وعي وبدء الفعاليات البيئية الشاملة أطلقت مع 25 منظمة مجتمعية، تستهدف التخفيف من تغير المناخ وأهداف التنمية المستدامة.',
          date: '2024-10-05',
          image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
          category: 'فعاليات بيئية'
        },
        {
          id: 'comm-news-2',
          title: 'برنامج التوعية الطبية المتنقلة يصل إلى 15,000 عضو مجتمع',
          summary: 'مبادرة رعاية صحية شاملة توفر خدمات طبية مجانية، فحوصات صحية، وتعليم الصحة للمجتمعات الريفية المحرومة.',
          date: '2024-11-12',
          image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
          category: 'الصحة والعافية'
        }
      ],
      media: [
        {
          id: 'comm-media-1',
          title: 'سلسلة ورش العمل والتدريب المجتمعي 2024',
          type: 'photo',
          url: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
          description: 'وثائق صور شاملة لورش العمل التدريبية المجتمعية، برامج تطوير المهارات، ومبادرات بناء القدرات',
          date: '2024-10-15'
        }
      ],
      statistics: [
        { label: 'برامج المجتمع', value: '185', icon: 'pi pi-users' },
        { label: 'مشاريع بيئية', value: '45', icon: 'pi pi-globe' },
        { label: 'المستفيدون المخدمون', value: '15,600', icon: 'pi pi-heart' },
      ],
      activities: [
        {
          id: 'comm-activity-1',
          title: 'حملة تنظيف وتحسين المدينة البيئية',
          description: 'مبادرة بيئية كبيرة تشمل أكثر من 500 متطوع في تحسين المدينة واستعادة البيئة',
          date: '2024-08-20',
          type: 'حملة بيئية',
          image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg'
        }
      ],
      achievements: [
        {
          id: 'comm-achievement-1',
          title: 'جائزة التميز الوطني في الأثر المجتمعي 2024',
          description: 'اعتراف وطني مرموق ببرامج خدمة المجتمع التحويلية ومبادرات الإدارة البيئية الاستثنائية',
          date: '2024-08-10',
          image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg'
        }
      ]
    }
  ];

  getAllSectors(): Observable<SectorData[]> {
    return of(this.sectors);
  }

  getSectorById(id: string): Observable<SectorData | undefined> {
    const sector = this.sectors.find(s => s.id === id);
    return of(sector);
  }

  addSector(sector: SectorData): Observable<void> {
    this.sectors.push({
      ...sector,
      departments: sector.departments || [],
      services: sector.services || [],
      news: sector.news || [],
      media: sector.media || [],
      statistics: sector.statistics || [],
      activities: sector.activities || [],
      achievements: sector.achievements || []
    });
    return of(void 0);
  }

  updateSector(id: string, updatedSector: SectorData): Observable<void> {
    const index = this.sectors.findIndex(s => s.id === id);
    if (index !== -1) {
      this.sectors[index] = {
        ...updatedSector,
        departments: updatedSector.departments || [],
        services: updatedSector.services || [],
        news: updatedSector.news || [],
        media: updatedSector.media || [],
        statistics: updatedSector.statistics || [],
        activities: updatedSector.activities || [],
        achievements: updatedSector.achievements || []
      };
    }
    return of();
  }

  deleteSector(id: string): Observable<void> {
    this.sectors = this.sectors.filter(s => s.id !== id);
    return of();
  }
}