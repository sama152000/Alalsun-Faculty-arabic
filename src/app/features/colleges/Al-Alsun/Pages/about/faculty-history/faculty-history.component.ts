import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HistoryEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-faculty-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faculty-history.component.html',
  styleUrls: ['./faculty-history.component.css']
})
export class FacultyHistoryComponent {
  historyEvents: HistoryEvent[] = [
    {
      year: '2016',
      title: 'تأسيس الكلية',
      description: 'تأسست كلية الألسن بقرار رئيس مجلس الوزراء رقم 2693 لسنة 2016، مما يمثل بداية عصر جديد في تعليم اللغات بجامعة الأقصر.',
      icon: 'pi pi-flag'
    },
    {
      year: '2016/2017',
      title: 'العام الأكاديمي الأول',
      description: 'بدأ العام الأكاديمي الأول في 2016/2017 بعدد محدود من الأقسام، مما وضع الأساس لبرامج تعليم لغوي شاملة.',
      icon: 'pi pi-graduation-cap'
    },
    {
      year: '2017-2020',
      title: 'التوسع التدريجي',
      description: 'توسعت الكلية تدريجيًا لتشمل ثمانية أقسام لغوية، تقدم برامج متنوعة في اللغات العربية والإنجليزية والفرنسية والألمانية والإيطالية والإسبانية والروسية والصينية.',
      icon: 'pi pi-building'
    },
    {
      year: '2020-حتى الآن',
      title: 'التميز والنمو',
      description: 'منذ تأسيسها، تسعى الكلية لتقديم تعليم عالي الجودة في اللغات والترجمة، وتطوير برامجها الأكاديمية، ودعم البحث العلمي وخدمة المجتمع.',
      icon: 'pi pi-star'
    }
  ];
}