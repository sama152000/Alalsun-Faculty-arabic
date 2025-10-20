import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { ContactInfo, ContactForm, DirectContact, ContactSubmissionResult, ContactMethod, CampusInfo, CampusFeature } from '../model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactInfo: ContactInfo = {
    address: {
      english: 'الأقصر - شرق السكة الحديدية، شارع جمال عبد الكريم - بجوار إدارة التربية والتعليم.'
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
  ];

  private contactMethods: ContactMethod[] = [
    {
      icon: 'pi pi-phone',
      title: 'الهاتف',
      primary: '(+20) 095-2356555',
      secondary: 'متاح خلال ساعات العمل الرسمية',
      color: 'var(--primary-color)'
    },
    {
      icon: 'pi pi-envelope',
      title: 'البريد الإلكتروني',
      primary: 'alsun@luxor.edu.eg',
      secondary: 'نرد خلال 24 ساعة',
      color: 'var(--primary-color)'
    },
    {
      icon: 'pi pi-map-marker',
      title: 'العنوان',
      primary: 'الأقصر - شرق السكة الحديدية، شارع جمال عبد الكريم - بجوار إدارة التربية والتعليم.',
      secondary: 'جامعة الأقصر، كلية الألسن',
      color: 'var(--primary-color)'
    },
    {
      icon: 'pi pi-facebook',
      title: 'فيسبوك',
      primary: 'كلية الألسن - جامعة الأقصر',
      secondary: 'الصفحة الرسمية على فيسبوك',
      color: 'var(--primary-color)'
    }
  ];

  private campusInfo: CampusInfo = {
    name: 'كلية الألسن - جامعة الأقصر',
    address: 'الأقصر - شرق السكة الحديدية، شارع جمال عبد الكريم - بجوار إدارة التربية والتعليم.',
    location: {
      lat: 25.687243,
      lng: 32.639637
    },
    phone: '(+20) 095-2356555',
    email: 'alsun@luxor.edu.eg'
  };

  private campusFeatures: CampusFeature[] = [
    {
      icon: 'pi pi-building',
      title: 'مرافق حديثة',
      description: 'فصول دراسية ومعامل لغة مجهزة للطلاب'
    },
    {
      icon: 'pi pi-users',
      title: 'خدمات الطلاب',
      description: 'دعم للطلاب عبر الأقسام المختلفة'
    },
    {
      icon: 'pi pi-book',
      title: 'المكتبة',
      description: 'الوصول إلى المراجع والموارد الأكاديمية'
    },
    {
      icon: 'pi pi-globe',
      title: 'البحث والمجتمع',
      description: 'مشاركة نشطة في البحث وخدمة المجتمع'
    }
  ];

  getContactInfo(): Observable<ContactInfo> {
    return of(this.contactInfo);
  }

  getDirectContacts(): Observable<DirectContact[]> {
    return of(this.directContacts);
  }

  getContactMethods(): Observable<ContactMethod[]> {
    return of(this.contactMethods);
  }

  getCampusInfo(): Observable<CampusInfo> {
    return of(this.campusInfo);
  }

  getCampusFeatures(): Observable<CampusFeature[]> {
    return of(this.campusFeatures);
  }

  submitContactForm(form: ContactForm): Observable<ContactSubmissionResult> {
    return of({
      success: true,
      message: 'تم إرسال رسالتك بنجاح. سنرد عليك قريباً.'
    }).pipe(delay(1000));
  }

  validateContactForm(form: ContactForm): { [key: string]: string } {
    const errors: { [key: string]: string } = {};

    if (!form.fullName || form.fullName.trim().length < 2) {
      errors['fullName'] = 'يجب أن يكون الاسم الكامل 2 أحرف على الأقل';
    }

    if (!form.email || !this.isValidEmail(form.email)) {
      errors['email'] = 'يرجى إدخال عنوان بريد إلكتروني صحيح';
    }

    if (!form.subject || form.subject.trim().length < 3) {
      errors['subject'] = 'يجب أن يكون الموضوع 3 أحرف على الأقل';
    }

    if (!form.message || form.message.trim().length < 10) {
      errors['message'] = 'يجب أن تكون الرسالة 10 أحرف على الأقل';
    }

    return errors;
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  getMapUrl(): string {
    const lat = this.contactInfo.location.lat;
    const lng = this.contactInfo.location.lng;
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3542.123456789!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sجامعة%20الأقصر!5e0!3m2!1sar!2seg!4v1697051234567`;
  }
}