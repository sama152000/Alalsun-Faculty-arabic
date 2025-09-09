import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { ContactInfo, ContactForm, DirectContact, ContactSubmissionResult } from '../model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactInfo: ContactInfo = {
    address: {
      english: 'الأقصر – شرق السكة الحديد، شارع جمال عبد الكريم – بجوار إدارة التربية والتعليم.'
    },
    phone: '(+20) 095-2356555',
    email: 'alsun@luxor.edu.eg',
    website: 'luxor.edu.eg/alsun',
    facebook: 'كلية الألسن – جامعة الأقصر',
    location: {
      lat: 25.687243,
      lng: 32.639637
    }
  };

  private directContacts: DirectContact[] = [
    {
      department: 'شؤون الطلاب',
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
      description: 'برامج التفاعل المجتمعي والشراكات',
      icon: 'pi pi-heart'
    },
    {
      department: 'التغذية والاقتراحات',
      email: 'feedback@luxor.edu.eg',
      description: 'تساعدنا آرائكم على تحسين خدماتنا',
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
    // محاكاة استدعاء API مع تأخير
    return of({
      success: true,
      message: 'تم إرسال رسالتك بنجاح. سنتواصل معك قريبًا.'
    }).pipe(delay(1000));
  }

  validateContactForm(form: ContactForm): { [key: string]: string } {
    const errors: { [key: string]: string } = {};

    if (!form.fullName || form.fullName.trim().length < 2) {
      errors['fullName'] = 'يجب أن يحتوي الاسم الكامل على الأقل 2 حرف';
    }

    if (!form.email || !this.isValidEmail(form.email)) {
      errors['email'] = 'يرجى إدخال عنوان بريد إلكتروني صالح';
    }

    if (!form.subject || form.subject.trim().length < 3) {
      errors['subject'] = 'يجب أن يحتوي الموضوع على الأقل 3 أحرف';
    }

    if (!form.message || form.message.trim().length < 10) {
      errors['message'] = 'يجب أن يحتوي الرسالة على الأقل 10 أحرف';
    }

    return errors;
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}