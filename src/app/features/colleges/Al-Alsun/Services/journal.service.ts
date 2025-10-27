import { Injectable } from '@angular/core';
import { JournalInfo, JournalButton } from '../model/journal.model';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  getJournalInfo(): JournalInfo {
    return {
      // title: 'مجلة الألسن للغات والعلوم الإنسانية',
      issuedBy: 'كلية الألسن، جامعة الأقصر',
      establishmentDate: 'أبريل 2019',
      languages: 'العربية واللغات الأجنبية',
      frequency: 'ربع سنوية',
      type: 'مجلة علمية محكمة',
      issuesPublished: 'تم نشر عددين، والثالث قيد الإعداد.',
      description: 'مجلة الألسن للغات والعلوم الإنسانية هي مجلة أكاديمية محكمة تعكس التزام الكلية بتعزيز البحث العلمي والتبادل الثقافي من خلال المساهمات الأكاديمية متعددة اللغات.',
      coverImage: './assets/alalsun-jornal.jpg'
    };
  }

  getJournalButtons(): JournalButton[] {
    return [
      {
        label: 'عرض المجلة',
        link: '/journal',
        isPrimary: true
      },
      {
        label: 'قراءة الأعداد',
        link: '/journal/issues',
        isPrimary: false
      }
    ];
  }
}