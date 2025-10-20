import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ContactService } from '../../Services/contact.service';
import { ContactInfo, ContactForm, DirectContact, ContactSubmissionResult, ContactMethod, CampusInfo, CampusFeature } from '../../model/contact.model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SafePipe } from '../../../../../core/pipes/safe.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, PageHeaderComponent, FooterComponent, CardModule, ButtonModule, SafePipe],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  breadcrumbs = [
    { label: 'تواصل معنا', url: '/alalsun-faculty/contact' }
  ];

  contactInfo: ContactInfo | null = null;
  directContacts: DirectContact[] = [];
  contactMethods: ContactMethod[] = [];
  campusInfo: CampusInfo | null = null;
  campusFeatures: CampusFeature[] = [];
  mapUrl: string = '';

  contactForm: ContactForm = {
    fullName: '',
    email: '',
    subject: '',
    message: ''
  };

  formErrors: { [key: string]: string } = {};
  isSubmitting = false;
  submissionResult: ContactSubmissionResult | null = null;
  showSuccessMessage = false;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.loadContactInfo();
    this.loadDirectContacts();
    this.loadContactMethods();
    this.loadCampusInfo();
    this.loadCampusFeatures();
    this.loadMapUrl();
  }

  loadContactInfo() {
    this.contactService.getContactInfo().subscribe({
      next: (info) => {
        this.contactInfo = info;
      },
      error: (error) => {
        console.error('خطأ في تحميل معلومات التواصل:', error);
      }
    });
  }

  loadDirectContacts() {
    this.contactService.getDirectContacts().subscribe({
      next: (contacts) => {
        this.directContacts = contacts;
      },
      error: (error) => {
        console.error('خطأ في تحميل جهات الاتصال المباشرة:', error);
      }
    });
  }
  
  loadContactMethods() {
    this.contactService.getContactMethods().subscribe({
      next: (methods) => {
        this.contactMethods = methods;
      },
      error: (error) => {
        console.error('خطأ في تحميل طرق التواصل:', error);
      }
    });
  }

  loadCampusInfo() {
    this.contactService.getCampusInfo().subscribe({
      next: (info) => {
        this.campusInfo = info;
      },
      error: (error) => {
        console.error('خطأ في تحميل معلومات الحرم الجامعي:', error);
      }
    });
  }

  loadCampusFeatures() {
    this.contactService.getCampusFeatures().subscribe({
      next: (features) => {
        this.campusFeatures = features;
      },
      error: (error) => {
        console.error('خطأ في تحميل مميزات الحرم الجامعي:', error);
      }
    });
  }

  loadMapUrl() {
    this.mapUrl = this.contactService.getMapUrl();
  }

  openGoogleMaps() {
    const lat = this.campusInfo?.location.lat;
    const lng = this.campusInfo?.location.lng;
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
  }

  getDirections() {
    const lat = this.campusInfo?.location.lat;
    const lng = this.campusInfo?.location.lng;
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
  }

  onSubmit() {
    this.formErrors = {};
    this.submissionResult = null;

    // Validate form
    this.formErrors = this.contactService.validateContactForm(this.contactForm);

    if (Object.keys(this.formErrors).length > 0) {
      return;
    }

    this.isSubmitting = true;

    this.contactService.submitContactForm(this.contactForm).subscribe({
      next: (result) => {
        this.submissionResult = result;
        if (result.success) {
          this.showSuccessMessage = true;
          this.resetForm();
          // Hide success message after 5 seconds
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 5000);
        }
        this.isSubmitting = false;
      },
      error: (error) => {
        console.error('خطأ في إرسال النموذج:', error);
        this.submissionResult = {
          success: false,
          message: 'حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.'
        };
        this.isSubmitting = false;
      }
    });
  }

  resetForm() {
    this.contactForm = {
      fullName: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  hasError(field: string): boolean {
    return !!this.formErrors[field];
  }

  getError(field: string): string {
    return this.formErrors[field] || '';
  }
}