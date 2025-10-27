import { Injectable } from '@angular/core';
import { FacultyGoalsSection, FacultyGoal } from '../model/faculty-goals.model';

@Injectable({
  providedIn: 'root'
})
export class FacultyGoalsService {

  getFacultyGoals(): FacultyGoalsSection {
    return {
      title: 'الأهداف الاستراتيجية للكلية',
      subtitle: 'التزامنا بالتميز في تعليم اللغات والبحث العلمي',
      goals: [
        {
          id: 1,
          icon: 'pi pi-refresh',
          title: 'المراجعة المستمرة وتطوير الأداء',
          description: 'تقييم وتحديث البرامج التعليمية بانتظام بما يتماشى مع المعايير الوطنية في تدريس اللغات والأدب، لضمان إعداد متخصصين مؤهلين تأهيلاً عاليًا في اللغات والأدب والترجمة.',
          order: 1
        },
        {
          id: 2,
          icon: 'pi pi-globe',
          title: 'تعزيز التعاون الدولي',
          description: 'توسيع وتعزيز التعاون الأكاديمي واتفاقيات التبادل مع الدول التي تُدرس لغاتها في الكلية، وتفعيل برامج تبادل الطلاب وأعضاء هيئة التدريس نظرًا لدورها الكبير في تطوير المهارات اللغوية والترجمة.',
          order: 2
        },
        {
          id: 3,
          icon: 'pi pi-search',
          title: 'خطة تطوير البحث العلمي لخمس سنوات',
          description: 'إنشاء وتنفيذ خطة بحثية لمدة خمس سنوات لدعم تقدم البحث العلمي وبناء جيل من الباحثين المؤهلين.',
          order: 3
        },
        {
          id: 4,
          icon: 'pi pi-users',
          title: 'التفاعل الأكاديمي والثقافي',
          description: 'مواصلة تنظيم المؤتمرات والندوات المتخصصة والعامة التي تساهم في الحياة العلمية والثقافية للمجتمع.',
          order: 4
        }
      ]
    };
  }
}