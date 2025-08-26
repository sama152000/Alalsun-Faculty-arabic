import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { ContactInfo, ContactForm, DirectContact, ContactSubmissionResult } from '../model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactInfo: ContactInfo = {
    address: {
      arabic: 'الأقصر – شرق السكة الحديد، شارع جامع عبد الكريم – بجوار الإدارة التعليمية.',
      english: 'الأقصر – شرق السكة الحديد، شارع جامع عبد الكريم – بجوار الإدارة التعليمية.'
    },
    phone: '(+20) 095-2356555',
    email: 'alsun@luxor.edu.eg',
    website: 'luxor.edu.eg/alsun',
    facebook: 'كلية الألسن - جامعة الأقصر',
    location: {
      lat: 25.687243,
      lng: 32.639637
    }
  };

  private directContacts: DirectContact[] = [
    {
      department: 'شئون الطلاب',
      email: 'student.affairs@luxor.edu.eg',
      description: 'التسجيل الأكاديمي، خدمات الطلاب، والاستفسارات العامة',
      icon: 'pi pi-users'
    },
    {
      department: 'الدراسات العليا',
      email: 'postgraduate@luxor.edu.eg',
      description: 'برامج الماجستير والدكتوراه، الإشراف البحثي',
      icon: 'pi pi-graduation-cap'
    },
    {
      department: 'خدمة المجتمع',
      email: 'community@luxor.edu.eg',
      description: 'برامج التوعية المجتمعية والشراكات',
      icon: 'pi pi-heart'
    },
    {
      department: 'الملاحظات والاقتراحات',
      email: 'feedback@luxor.edu.eg',
      description: 'ملاحظاتكم تساعدنا على تحسين خدماتنا',
      icon: 'pi pi-comment'
    }
  ];

  getContactInfo(): Observable<ContactInfo> {
    return of(this.contactInfo);
  }

  getDirectContacts(): Observable<DirectContact[]> {
    return of(this.directContacts);
  }

  submitContactForm(form: ContactForm): Observable<ContactSubmissionResult> {
    // Simulate API call with delay
    return of({
      success: true,
      message: 'تم إرسال رسالتك بنجاح. سنتواصل معك قريبًا.'
    }).pipe(delay(1000));
  }

  validateContactForm(form: ContactForm): { [key: string]: string } {
    const errors: { [key: string]: string } = {};

    if (!form.fullName || form.fullName.trim().length < 2) {
      errors['fullName'] = 'يجب أن يتكون الاسم الكامل من حرفين على الأقل';
    }

    if (!form.email || !this.isValidEmail(form.email)) {
      errors['email'] = 'يرجى إدخال عنوان بريد إلكتروني صالح';
    }

    if (!form.subject || form.subject.trim().length < 3) {
      errors['subject'] = 'يجب أن يتكون الموضوع من ثلاثة أحرف على الأقل';
    }

    if (!form.message || form.message.trim().length < 10) {
      errors['message'] = 'يجب أن تتكون الرسالة من عشرة أحرف على الأقل';
    }

    return errors;
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}