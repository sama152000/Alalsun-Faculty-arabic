import { Injectable } from '@angular/core';
import { NewsItem, NewsCategory, NewsFilter } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsItems: NewsItem[] = [
    // أخبار الطلاب
    {
      id: 1,
      title: 'جدول الامتحانات النهائية - ربيع 2025',
      summary: 'تم الإعلان عن جدول الامتحانات النهائية (ربيع 2025) لجميع الأقسام.',
      content: `تعلن كلية الألسن عن جدول الامتحانات النهائية لفصل الربيع 2025. يُطلب من جميع الطلاب التحقق من جداول امتحاناتهم والاستعداد وفقًا لذلك.

      المعلومات الرئيسية:
      - فترة الامتحانات: 15-30 مايو 2025
      - يجب على الطلاب إحضار بطاقات الهوية الجامعية
      - الموبايلات محظورة بشدة في قاعات الامتحان
      - لن يُسمح بدخول المتأخرين بعد 30 دقيقة

      لأي استفسارات، يرجى التواصل مع مكتب شؤون الطلاب.`,
      date: new Date('2025-04-15'),
      category: NewsCategory.STUDENTS,
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'مكتب شؤون الطلاب',
      tags: ['امتحانات', 'جدول', 'ربيع2025']
    },
    {
      id: 2,
      title: 'يوم الثقافة الطلابي 2025',
      summary: 'نظمت الكلية يومًا ثقافيًا لعرض مواهب الطلاب في الفن، الأدب، والموسيقى.',
      content: `استضافت كلية الألسن يوم الثقافة الطلابي السنوي بنجاح، حيث تضمن عروضًا ومعارض من الطلاب في جميع الأقسام.

      الإبرزات شملت:
      - تلاوات شعرية متعددة اللغات
      - عروض موسيقى تقليدية
      - معارض فنية تعرض أعمال الطلاب
      - مهرجان طعام ثقافي
      - أنشطة تبادل اللغات

      ساهم الحدث في تعزيز التفاهم بين الثقافات ولاحتفال بتنوع جسم الطلاب لدينا.`,
      date: new Date('2025-03-10'),
      category: NewsCategory.STUDENTS,
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'لجنة الأنشطة الثقافية',
      tags: ['ثقافة', 'طلاب', 'فنون', 'تنوع']
    },
    {
      id: 3,
      title: 'برنامج التبادل الطلابي',
      summary: 'تم فتح طلبات برنامج التبادل الدولي للطلاب للعام الدراسي 2025-2026.',
      content: `تعلن كلية الألسن بسرور عن فتح طلبات برنامج التبادل الدولي للطلاب.

      تفاصيل البرنامج:
      - المدة: فصل دراسي واحد أو عام دراسي كامل
      - جامعات شريكة في أوروبا، آسيا، وأمريكا الشمالية
      - منح دراسية متاحة للطلاب المؤهلين
      - الموعد النهائي للتقديم: 30 يونيو 2025

      يجب على الطلاب المؤهلين أن يكون لديهم معدل تراكمي لا يقل عن 3.0 وأن يثبتوا كفاءتهم في اللغة المستهدفة.`,
      date: new Date('2025-05-01'),
      category: NewsCategory.STUDENTS,
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'مكتب البرامج الدولية',
      tags: ['تبادل', 'دولي', 'منحة', 'تقديم']
    },
    // أخبار الدراسات العليا
    {
      id: 4,
      title: 'مؤتمر الترجمة الدولي 2025',
      summary: 'تستضيف كلية الألسن مؤتمرًا دوليًا حول دراسات الترجمة والاتصال عبر الثقافات.',
      content: `تفتخر كلية الألسن باستضافة مؤتمر الترجمة الدولي 2025، الذي يجمع بين العلماء والممارسين من جميع أنحاء العالم.

      موضوعات المؤتمر:
      - تقنيات الترجمة الرقمية
      - تحديات الترجمة الأدبية
      - الاتصال عبر الثقافات
      - أخلاقيات الترجمة وجودتها

      سيضم المؤتمر محاضرات رئيسية، مناقشات لوائح، وورش عمل. التسجيل مفتوح لأعضاء هيئة التدريس، الطلاب، والمشاركين الخارجيين.`,
      date: new Date('2025-05-20'),
      category: NewsCategory.POSTGRADUATE,
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'لجنة المؤتمر',
      tags: ['مؤتمر', 'ترجمة', 'بحث', 'دولي']
    },
    {
      id: 5,
      title: 'دفاع رسالة ماجستير - أدب عربي',
      summary: 'نجح الطالب الخريج أحمد علي في الدفاع عن رسالته حول الأدب العربي المعاصر.',
      content: `أحمد علي، طالب ماجستير في قسم اللغة العربية، نجح في الدفاع عن رسالته الموسومة بـ "التقنيات السردية في الأدب العربي المعاصر: دراسة مقارنة."

      تفاصيل الرسالة:
      - المشرف: د. فاطمة حسن
      - الممتحص الخارجي: أ.د. عمر محمود (جامعة القاهرة)
      - الدرجة: ممتاز بتقدير الشرف
      - تاريخ الدفاع: 5 يونيو 2025

      تستكشف الرسالة التقنيات السردية الجديدة المستخدمة من قبل المؤلفين العرب المعاصرين وتأثيرها على الخطاب الأدبي الحديث.`,
      date: new Date('2025-06-05'),
      category: NewsCategory.POSTGRADUATE,
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'مكتب الدراسات العليا',
      tags: ['رسالة', 'دفاع', 'عربي', 'أدب', 'ماجستير']
    },
    {
      id: 6,
      title: 'برنامج دكتوراه جديد في دراسات الترجمة',
      summary: 'تعلن الكلية عن برنامج دكتوراه جديد في دراسات الترجمة يبدأ في خريف 2025.',
      content: `تُسعد كلية الألسن بإعلان إطلاق برنامج دكتوراه جديد في دراسات الترجمة، يبدأ في خريف 2025.

      مميزات البرنامج:
      - نهج تفاعلي يجمع بين اللغويات، الأدب، والتكنولوجيا
      - فرص بحثية مع شركاء دوليين
      - تمويل متاح للمرشحين المؤهلين
      - المدة: 3-4 سنوات

      يهدف البرنامج إلى تجهيز الجيل التالي من علماء الترجمة والممارسين للمهن الأكاديمية والمهنية.`,
      date: new Date('2025-03-15'),
      category: NewsCategory.POSTGRADUATE,
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'لجنة الدراسات العليا',
      tags: ['دكتوراه', 'ترجمة', 'برنامج', 'بحث']
    },
    // أخبار المجلس والإدارة
    {
      id: 7,
      title: 'اجتماع مجلس الكلية - أبريل 2025',
      summary: 'ناقش مجلس الكلية البرامج الجديدة، شؤون الطلاب، واستراتيجيات البحث.',
      content: `عقد مجلس الكلية اجتماعه الشهري لمناقشة مختلف الأمور الأكاديمية والإدارية.

      القرارات الرئيسية:
      - الموافقة على تحديثات مناهج جديدة لجميع الأقسام
      - تخصيص الميزانية لمشاريع البحث
      - تعزيز خدمات دعم الطلاب
      - اتفاقيات شراكات دولية

      أكد المجلس على أهمية الحفاظ على التميز الأكاديمي مع توسيع الفرص للطلاب وأعضاء هيئة التدريس.`,
      date: new Date('2025-04-02'),
      category: NewsCategory.BOARD,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'أمين الكلية',
      tags: ['مجلس', 'اجتماع', 'قرارات', 'أكاديمي']
    },
    {
      id: 8,
      title: 'لوائح جديدة للتسجيل في الدراسات العليا',
      summary: 'وافق المجلس على لوائح جديدة للدراسات العليا بدءًا من العام الدراسي 2025/2026.',
      content: `وافق مجلس الكلية على لوائح جديدة للتسجيل في الدراسات العليا لتعزيز جودة التعليم الجامعي.

      تشمل اللوائح الجديدة:
      - معايير قبول محدثة
      - متطلبات كفاءة اللغة الإنجليزية المحسنة
      - عملية تقييم مقترح البحث
      - إجراءات تعيين المشرفين

      تهدف هذه التغييرات إلى ضمان أن برامجنا الجامعية تحافظ على أعلى المعايير الأكاديمية وتجهز الطلاب لمهن ناجحة في الأكاديميا والصناعة.`,
      date: new Date('2025-03-01'),
      category: NewsCategory.BOARD,
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'لجنة الشؤون الأكاديمية',
      tags: ['لوائح', 'دراسات عليا', 'تسجيل', 'معايير']
    },
    {
      id: 9,
      title: 'خطة الكلية الاستراتيجية 2025-2030',
      summary: 'يعلن مجلس الكلية عن خطة استراتيجية جديدة لمدة خمس سنوات تركز على الابتكار والتميز.',
      content: `كشفت كلية الألسن عن خطتها الاستراتيجية للفترة 2025-2030، التي تحدد أهدافًا طموحة للتميز الأكاديمي والابتكار.

      الأولويات الاستراتيجية:
      - التحول الرقمي للتعليم
      - التميز في البحث والابتكار
      - توسيع الشراكات الدولية
      - نجاح الطلاب والتوظيف
      - التفاعل مع المجتمع والخدمة

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

  addNews(newNews: NewsItem): void {
    newNews.id = this.newsItems.length ? Math.max(...this.newsItems.map(item => item.id)) + 1 : 1;
    this.newsItems.push(newNews);
  }

  updateNews(updatedNews: NewsItem): void {
    const index = this.newsItems.findIndex(item => item.id === updatedNews.id);
    if (index !== -1) {
      this.newsItems[index] = updatedNews;
    }
  }

  deleteNews(id: number): void {
    this.newsItems = this.newsItems.filter(item => item.id !== id);
  }
}