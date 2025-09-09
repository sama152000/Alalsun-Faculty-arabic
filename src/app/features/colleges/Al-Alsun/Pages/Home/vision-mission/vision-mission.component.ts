import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vision-mission',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vision-mission.component.html',
  styleUrls: ['./vision-mission.component.css']
})
export class VisionMissionComponent {
  missionPoints = [
    {
      icon: 'pi pi-graduation-cap',
      text: 'تأهيل خريجين بمهارات لغوية وترجمية، قادرين على خدمة المجتمع والبيئة مع الحفاظ على الهوية الثقافية.'
    },
    {
      icon: 'pi pi-users',
      text: 'دعم الطلاب في الأنشطة الثقافية والفنية والرياضية، لتعزيز نموهم الأكاديمي والشخصي.'
    },
    {
      icon: 'pi pi-briefcase',
      text: 'تطوير مهارات الطلاب لتلبية احتياجات سوق العمل.'
    }
  ];

  objectives = [
    {
      icon: 'pi pi-book',
      text: 'التميز الأكاديمي وتحديث المناهج الدراسية.'
    },
    {
      icon: 'pi pi-search',
      text: 'تعزيز البحث العلمي والدراسات العليا في اللغات والترجمة.'
    },
    {
      icon: 'pi pi-globe',
      text: 'تعزيز الشراكات والتبادل الثقافي الدولي.'
    },
    {
      icon: 'pi pi-users',
      text: 'تمكين الأنشطة الطلابية ومهارات التوظيف.'
    }
  ];
}