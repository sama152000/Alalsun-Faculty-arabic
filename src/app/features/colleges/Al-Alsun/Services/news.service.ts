import { Injectable } from '@angular/core';
import { NewsItem, NewsCategory, NewsFilter } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsItems: NewsItem[] = [
    // Students News
    {
      id: 1,
      title: 'جدول الامتحانات النهائية - ربيع 2025',
      summary: 'تم الإعلان عن الجدول الرسمي للامتحانات النهائية (ربيع 2025) لجميع الأقسام.',
      content: `تعلن كلية الألسن عن جدول الامتحانات النهائية لفصل ربيع 2025. يُطلب من جميع الطلاب التحقق من جداول الامتحانات والاستعداد وفقًا لذلك.

      المعلومات الأساسية:
      - فترة الامتحانات: 15-30 مايو 2025
      - يجب على الطلاب إحضار بطاقات الجامعة الخاصة بهم
      - يُمنع منعًا باتًا استخدام الهواتف المحمولة في قاعات الامتحانات
      - لن يُسمح للمتأخرين بالدخول بعد مرور 30 دقيقة

      للاستفسارات، يرجى التواصل مع مكتب شئون الطلاب.`,
      date: new Date('2025-04-15'),
      category: NewsCategory.STUDENTS,
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'مكتب شئون الطلاب',
      tags: ['امتحانات', 'جدول', 'ربيع2025']
    },
    {
      id: 2,
      title: 'يوم الطالب الثقافي 2025',
      summary: 'نظمت الكلية يومًا ثقافيًا لعرض مواهب الطلاب في الفنون والأدب والموسيقى.',
      content: `استضافت كلية الألسن بنجاح يوم الطالب الثقافي السنوي، والذي تضمن عروضًا ومعارض من طلاب جميع الأقسام.

      النقاط البارزة:
      - إلقاء قصائد متعددة اللغات
      - عروض موسيقية تقليدية
      - معارض فنية تعرض أعمال الطلاب
      - مهرجان طعام ثقافي
      - أنشطة تبادل لغوي

      عزز الحدث التفاهم الثقافي واحتفل بتنوع طلابنا.`,
      date: new Date('2025-03-10'),
      category: NewsCategory.STUDENTS,
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'لجنة الأنشطة الثقافية',
      tags: ['ثقافة', 'طلاب', 'فنون', 'تنوع']
    },
    {
      id: 3,
      title: 'برنامج تبادل الطلاب الدولي',
      summary: 'التقديم مفتوح الآن لبرنامج تبادل الطلاب الدولي للعام الدراسي 2025-2026.',
      content: `تعلن كلية الألسن عن فتح باب التقديم لبرنامج تبادل الطلاب الدولي.

      تفاصيل البرنامج:
      - المدة: فصل دراسي واحد أو عام دراسي كامل
      - جامعات شريكة في أوروبا وآسيا وأمريكا الشمالية
      - منح دراسية متاحة للطلاب المؤهلين
      - الموعد النهائي للتقديم: 30 يونيو 2025

      يجب أن يكون لدى الطلاب المؤهلين معدل تراكمي لا يقل عن 3.0 وإثبات الكفاءة في اللغة المستهدفة.`,
      date: new Date('2025-05-01'),
      category: NewsCategory.STUDENTS,
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'مكتب البرامج الدولية',
      tags: ['تبادل', 'دولي', 'منحة', 'تقديم']
    },

    // Postgraduate News
    {
      id: 4,
      title: 'مؤتمر الترجمة الدولي 2025',
      summary: 'تستضيف كلية الألسن مؤتمرًا دوليًا حول دراسات الترجمة والتواصل بين الثقافات.',
      content: `تفخر كلية الألسن باستضافة مؤتمر الترجمة الدولي 2025، والذي يجمع العلماء والممارسين من جميع أنحاء العالم.

      موضوعات المؤتمر:
      - تقنيات الترجمة الرقمية
      - تحديات الترجمة الأدبية
      - التواصل بين الثقافات
      - أخلاقيات الترجمة وضمان الجودة

      سيضم المؤتمر متحدثين رئيسيين، مناقشات جماعية، وورش عمل. التسجيل مفتوح لأعضاء هيئة التدريس والطلاب والمشاركين الخارجيين.`,
      date: new Date('2025-05-20'),
      category: NewsCategory.POSTGRADUATE,
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'لجنة المؤتمر',
      tags: ['مؤتمر', 'ترجمة', 'بحث', 'دولي']
    },
    {
      id: 5,
      title: 'مناقشة رسالة ماجستير - الأدب العربي',
      summary: 'نجح الطالب أحمد علي في مناقشة رسالته حول الأدب العربي المعاصر.',
      content: `نجح أحمد علي، طالب ماجستير في قسم اللغة العربية، في مناقشة رسالته بعنوان "التقنيات السردية في الأدب العربي المعاصر: دراسة مقارنة".

      تفاصيل الرسالة:
      - المشرف: د. فاطمة حسن
      - الممتحن الخارجي: أ.د. عمر محمود (جامعة القاهرة)
      - الدرجة: امتياز مع مرتبة الشرف
      - تاريخ المناقشة: 5 يونيو 2025

      تستكشف الرسالة التقنيات السردية المبتكرة التي يستخدمها الكتاب العرب المعاصرون وتأثيرها على الخطاب الأدبي الحديث.`,
      date: new Date('2025-06-05'),
      category: NewsCategory.POSTGRADUATE,
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'مكتب الدراسات العليا',
      tags: ['رسالة', 'مناقشة', 'عربي', 'أدب', 'ماجستير']
    },
    {
      id: 6,
      title: 'برنامج دكتوراه جديد في دراسات الترجمة',
      summary: 'تعلن الكلية عن برنامج دكتوراه جديد في دراسات الترجمة يبدأ في خريف 2025.',
      content: `تعلن كلية الألسن بفخر عن إطلاق برنامج دكتوراه جديد في دراسات الترجمة، يبدأ في خريف 2025.

      مميزات البرنامج:
      - نهج متعدد التخصصات يجمع بين اللغويات والأدب والتكنولوجيا
      - فرص بحثية مع شركاء دوليين
      - تمويل متاح للمرشحين المؤهلين
      - المدة: 3-4 سنوات

      يهدف البرنامج إلى إعداد الجيل القادم من علماء وممارسي الترجمة لمهن أكاديمية ومهنية.`,
      date: new Date('2025-03-15'),
      category: NewsCategory.POSTGRADUATE,
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'لجنة الدراسات العليا',
      tags: ['دكتوراه', 'ترجمة', 'برنامج', 'بحث']
    },

    // Board & Administration News
    {
      id: 7,
      title: 'اجتماع مجلس الكلية - أبريل 2025',
      summary: 'ناقش مجلس الكلية البرامج الجديدة، شئون الطلاب، واستراتيجيات البحث.',
      content: `عقد مجلس الكلية اجتماعه الشهري لمناقشة مختلف الأمور الأكاديمية والإدارية.

      القرارات الرئيسية:
      - الموافقة على تحديثات المناهج الدراسية لجميع الأقسام
      - تخصيص الميزانية للمشروعات البحثية
      - تعزيز خدمات دعم الطلاب
      - اتفاقيات الشراكة الدولية

      أكد المجلس على أهمية الحفاظ على التميز الأكاديمي مع توسيع الفرص للطلاب وأعضاء هيئة التدريس.`,
      date: new Date('2025-04-02'),
      category: NewsCategory.BOARD,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'سكرتير الكلية',
      tags: ['مجلس', 'اجتماع', 'قرارات', 'أكاديمي']
    },
    {
      id: 8,
      title: 'لوائح جديدة للالتحاق بالدراسات العليا',
      summary: 'وافق المجلس على لوائح جديدة للدراسات العليا بدءًا من العام الدراسي 2025/2026.',
      content: `وافق مجلس الكلية على لوائح جديدة للالتحاق بالدراسات العليا لتعزيز جودة التعليم العالي.

      اللوائح الجديدة تشمل:
      - معايير قبول محدثة
      - متطلبات إجادة اللغة الإنجليزية المحسنة
      - عملية تقييم مقترح البحث
      - إجراءات تعيين المشرفين

      تهدف هذه التغييرات إلى ضمان أن برامجنا للدراسات العليا تحافظ على أعلى المعايير الأكاديمية وتُعد الطلاب لمهن ناجحة في الأوساط الأكاديمية والصناعية.`,
      date: new Date('2025-03-01'),
      category: NewsCategory.BOARD,
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'لجنة الشئون الأكاديمية',
      tags: ['لوائح', 'دراسات عليا', 'التحاق', 'معايير']
    },
    {
      id: 9,
      title: 'الخطة الاستراتيجية للكلية 2025-2030',
      summary: 'أعلن مجلس الكلية عن الخطة الاستراتيجية الجديدة لخمس سنوات تركز على الابتكار والتميز.',
      content: `كشفت كلية الألسن عن خطتها الاستراتيجية للأعوام 2025-2030، محددة أهدافًا طموحة للتميز الأكاديمي والابتكار.

      الأولويات الاستراتيجية:
      - التحول الرقمي للتعليم
      - التميز البحثي والابتكار
      - توسيع الشراكات الدولية
      - نجاح الطلاب وقابليتهم للتوظيف
      - التفاعل المجتمعي والخدمة

      تعكس الخطة التزامنا بأن نصبح مؤسسة رائدة في تعليم اللغات والبحث في المنطقة.`,
      date: new Date('2025-02-15'),
      category: NewsCategory.BOARD,
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'لجنة التخطيط الاستراتيجي',
      tags: ['استراتيجية', 'تخطيط', 'ابتكار', 'تميز']
    }
  ];

  getAllNews(): NewsItem[] {
    return this.newsItems.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  getNewsById(id: number): NewsItem | undefined {
    return this.newsItems.find(item => item.id === id);
  }

  getNewsByCategory(category: NewsCategory): NewsItem[] {
    return this.newsItems
      .filter(item => item.category === category)
      .sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  filterNews(filter: NewsFilter): NewsItem[] {
    let filteredNews = this.newsItems;

    if (filter.category) {
      filteredNews = filteredNews.filter(item => item.category === filter.category);
    }

    if (filter.year) {
      filteredNews = filteredNews.filter(item => item.date.getFullYear() === filter.year);
    }

    if (filter.month) {
      filteredNews = filteredNews.filter(item => item.date.getMonth() + 1 === filter.month);
    }

    if (filter.keyword) {
      const keyword = filter.keyword.toLowerCase();
      filteredNews = filteredNews.filter(item =>
        item.title.toLowerCase().includes(keyword) ||
        item.summary.toLowerCase().includes(keyword) ||
        item.content.toLowerCase().includes(keyword) ||
        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(keyword)))
      );
    }

    return filteredNews.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  getFeaturedNews(): NewsItem[] {
    return this.newsItems
      .filter(item => item.featured)
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, 3);
  }

  getRecentNews(limit: number = 5): NewsItem[] {
    return this.newsItems
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, limit);
  }
}