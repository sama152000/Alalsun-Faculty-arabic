import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { MenuService } from '../../../../colleges/Al-Alsun/Services/menu.service';
import { MenuItem, MenuType, HeaderType, NavbarItem, SocialMediaIcon } from '../../../../colleges/Al-Alsun/model/menu.model';

@Component({
  selector: 'app-add-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  menuForm: FormGroup;
  menuTypes = Object.values(MenuType);
  headerTypes = Object.values(HeaderType);
  socialIcons: SocialMediaIcon[] = [
    { label: 'فيسبوك', value: 'pi pi-facebook', color: '#1877f2' },
    { label: 'تويتر', value: 'pi pi-twitter', color: '#1da1f2' },
    { label: 'إنستغرام', value: 'pi pi-instagram', color: '#e4405f' },
    { label: 'لينكد إن', value: 'pi pi-linkedin', color: '#0077b5' },
    { label: 'يوتيوب', value: 'pi pi-youtube', color: '#ff0000' },
    { label: 'واتساب', value: 'pi pi-whatsapp', color: '#25d366' },
    { label: 'تيليجرام', value: 'pi pi-telegram', color: '#0088cc' },
    { label: 'البريد الإلكتروني', value: 'pi pi-envelope', color: '#6c757d' },
    { label: 'الهاتف', value: 'pi pi-phone', color: '#28a745' },
    { label: 'الموقع الإلكتروني', value: 'pi pi-globe', color: '#17a2b8' }
  ];
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private router: Router
  ) {
    this.menuForm = this.createForm();
  }

  ngOnInit() {
    this.setupFormValidation();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      headerType: [''],
      isActive: [false],
      facultyInfo: this.fb.group({
        name: [''],
        subtitle: [''],
        universityName: [''],
        established: ['']
      }),
      navbarItems: this.fb.array([]),
      submenu: this.fb.group({
        copyright: [''],
        contactMethods: this.fb.group({
          phone: [''],
          email: [''],
          universityWebsite: [''],
          languages: this.fb.array([])
        })
      }),
      footerData: this.fb.group({
        title: [''],
        subtitle: [''],
        tagline: [''],
        socialLinks: this.fb.array([]),
        quickLinks: this.fb.group({
          title: [''],
          links: this.fb.array([])
        }),
        academicLinks: this.fb.group({
          title: [''],
          links: this.fb.array([])
        }),
        resourceLinks: this.fb.group({
          title: [''],
          links: this.fb.array([])
        }),
        copyright: [''],
        contactMethods: this.fb.group({
          phone: [''],
          email: [''],
          universityWebsite: [''],
          languages: this.fb.array([])
        })
      })
    });
  }

  private setupFormValidation() {
    this.menuForm.get('type')?.valueChanges.subscribe(type => {
      const headerTypeControl = this.menuForm.get('headerType');
      if (type === MenuType.HEADER) {
        headerTypeControl?.setValidators([Validators.required]);
      } else {
        headerTypeControl?.clearValidators();
      }
      headerTypeControl?.updateValueAndValidity();
    });
  }

  // Form Array Getters
  get navbarItemsArray() { return this.menuForm.get('navbarItems') as FormArray; }
  get submenuLanguagesArray() { return this.menuForm.get('submenu.contactMethods.languages') as FormArray; }
  get footerSocialLinksArray() { return this.menuForm.get('footerData.socialLinks') as FormArray; }
  get footerQuickLinksArray() { return this.menuForm.get('footerData.quickLinks.links') as FormArray; }
  get footerAcademicLinksArray() { return this.menuForm.get('footerData.academicLinks.links') as FormArray; }
  get footerResourceLinksArray() { return this.menuForm.get('footerData.resourceLinks.links') as FormArray; }
  get footerContactLanguagesArray() { return this.menuForm.get('footerData.contactMethods.languages') as FormArray; }

  // Navbar Items Management
  addNavbarItem(parentIndex?: number) {
    const itemGroup = this.fb.group({
      label: ['', Validators.required],
      route: [''],
      target: [''],
      parentId: [null],
      children: this.fb.array([])
    });

    this.navbarItemsArray.push(itemGroup);
  }

  removeNavbarItem(index: number) {
    this.navbarItemsArray.removeAt(index);
  }

  addNavbarChild(index: number) {
    const childrenArray = this.navbarItemsArray.at(index).get('children') as FormArray;
    childrenArray.push(this.fb.group({
      label: ['', Validators.required],
      route: [''],
      target: ['']
    }));
  }

  removeNavbarChild(parentIndex: number, childIndex: number) {
    const childrenArray = this.navbarItemsArray.at(parentIndex).get('children') as FormArray;
    childrenArray.removeAt(childIndex);
  }

  getNavbarChildrenArray(index: number): FormArray {
    return this.navbarItemsArray.at(index).get('children') as FormArray;
  }

  // Language Management
  addSubmenuLanguage() {
    this.submenuLanguagesArray.push(this.fb.group({
      value: ['', Validators.required],
      label: ['', Validators.required]
    }));
  }

  removeSubmenuLanguage(index: number) {
    this.submenuLanguagesArray.removeAt(index);
  }

  // Footer Management
  addFooterSocialLink() {
    this.footerSocialLinksArray.push(this.fb.group({
      platform: ['', Validators.required],
      url: ['', Validators.required],
      icon: ['', Validators.required],
      target: ['']
    }));
  }

  removeFooterSocialLink(index: number) {
    this.footerSocialLinksArray.removeAt(index);
  }

  addFooterQuickLink() {
    this.footerQuickLinksArray.push(this.fb.group({
      title: ['', Validators.required],
      url: ['', Validators.required],
      target: ['']
    }));
  }

  removeFooterQuickLink(index: number) {
    this.footerQuickLinksArray.removeAt(index);
  }

  addFooterAcademicLink() {
    this.footerAcademicLinksArray.push(this.fb.group({
      title: ['', Validators.required],
      url: ['', Validators.required],
      target: ['']
    }));
  }

  removeFooterAcademicLink(index: number) {
    this.footerAcademicLinksArray.removeAt(index);
  }

  addFooterResourceLink() {
    this.footerResourceLinksArray.push(this.fb.group({
      title: ['', Validators.required],
      url: ['', Validators.required],
      target: ['']
    }));
  }

  removeFooterResourceLink(index: number) {
    this.footerResourceLinksArray.removeAt(index);
  }

  addFooterContactLanguage() {
    this.footerContactLanguagesArray.push(this.fb.group({
      value: ['', Validators.required],
      label: ['', Validators.required]
    }));
  }

  removeFooterContactLanguage(index: number) {
    this.footerContactLanguagesArray.removeAt(index);
  }

  // Form Submission
  saveMenu() {
    if (this.menuForm.valid) {
      const formValue = this.menuForm.value;
      const menu: MenuItem = {
        id: 0,
        name: formValue.name,
        type: formValue.type,
        headerType: formValue.type === MenuType.HEADER ? formValue.headerType : undefined,
        isActive: formValue.isActive,
        data: this.buildMenuData(formValue)
      };

      this.menuService.addMenu(menu).subscribe(() => {
        this.showSuccessToast('تم إنشاء القائمة بنجاح');
        setTimeout(() => {
          this.router.navigate(['/dashboard/menus']);
        }, 2000);
      });
    } else {
      this.showErrorToast('يرجى ملء جميع الحقول المطلوبة');
      this.markFormGroupTouched(this.menuForm);
    }
  }

  private buildMenuData(formValue: any) {
    if (formValue.type === MenuType.HEADER) {
      switch (formValue.headerType) {
        case HeaderType.TOP_NAV:
          return { facultyInfo: formValue.facultyInfo };
        case HeaderType.MAIN_NAV:
          return { navbarItems: formValue.navbarItems };
        case HeaderType.SUBMENU:
          return { submenu: formValue.submenu };
        default:
          return {};
      }
    } else {
      return formValue.footerData;
    }
  }

  private markFormGroupTouched(formGroup: FormGroup | FormArray) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormControl) {
        control.markAsTouched();
      } else if (control instanceof FormGroup || control instanceof FormArray) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Utility Methods
  isFieldInvalid(fieldName: string): boolean {
    const field = this.menuForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.menuForm.get(fieldName);
    if (field?.errors) {
      if (field.errors['required']) return `هذا الحقل مطلوب`;
      if (field.errors['email']) return 'يرجى إدخال بريد إلكتروني صحيح';
      if (field.errors['url']) return 'يرجى إدخال رابط صحيح';
    }
    return '';
  }

  // Toast Methods
  showSuccessToast(message: string) {
    this.showToast = true;
    this.toastClass = 'toast-success';
    this.toastIcon = 'pi pi-check';
    this.toastMessage = message;
    setTimeout(() => this.hideToast(), 3000);
  }

  showErrorToast(message: string) {
    this.showToast = true;
    this.toastClass = 'toast-error';
    this.toastIcon = 'pi pi-times';
    this.toastMessage = message;
    setTimeout(() => this.hideToast(), 3000);
  }

  hideToast() {
    this.showToast = false;
    this.toastMessage = '';
    this.toastClass = '';
    this.toastIcon = '';
  }
}