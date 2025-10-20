import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem, MenuType, HeaderType, HeaderData, FooterData, NavbarItem } from '../model/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menus: MenuItem[] = [
    {
      id: 1,
      name: 'Default Header',
      type: MenuType.HEADER,
      headerType: HeaderType.MAIN_NAV,
      isActive: true,
      data: {
        navbarItems: [
          { label: 'الرئيسية', route: '/home' },
          { label: 'عن الجامعة', route: '/about' },
          { label: 'الأقسام', route: '/departments' },
          { label: 'اعضاء هيئه التدريس', route: '/staff' },
          { label: 'الأخبار', route: '/news' },
          {
            label: 'القطاعات',
            children: [
              { label: 'شؤون الطلاب والتعليم',  route: '/sectors/education-students' },
              { label: 'الدراسات العليا والبحث العلمي',  route: '/sectors/postgraduate-research' },
              { label: 'خدمة المجتمع وتنمية البيئة', route: '/sectors/community-environmental' },
            ]
          },
          { label: 'المراكز', route: '/services' },
          { label: 'تواصل معنا', route: '/contact' },
        ]
      }
    },
    {
      id: 2,
      name: 'Default TopNav',
      type: MenuType.HEADER,
      headerType: HeaderType.TOP_NAV,
      isActive: true,
      data: {}
    },
    {
      id: 3,
      name: 'Default Submenu',
      type: MenuType.HEADER,
      headerType: HeaderType.SUBMENU,
      isActive: true,
      data: {
        submenu: {
          copyright: '2025 كلية الألسن. جميع الحقوق محفوظة.',
          contactMethods: {
            phone: '+1234567890',
            email: 'info@alsun.edu',
            universityWebsite: 'https://luxor-university.edu',
            languages: [
              { value: 'en', label: 'English' },
              { value: 'ar', label: 'العربية' }
            ]
          }
        }
      }
    },
    {
      id: 4,
      name: 'Default Footer',
      type: MenuType.FOOTER,
      isActive: true,
      data: {
        title: 'كلية الألسن',
        subtitle: 'جامعة الأقصر',
        tagline: 'التميز في تعليم اللغات والترجمة',
        socialLinks: [
          { platform: 'Facebook', url: '#', icon: 'pi pi-facebook' },
          { platform: 'YouTube', url: '#', icon: 'pi pi-youtube' },
          { platform: 'LinkedIn', url: '#', icon: 'pi pi-linkedin' },
          { platform: 'Twitter', url: '#', icon: 'pi pi-twitter' }
        ],
        quickLinks: {
          title: 'روابط سريعة',
          links: [
            { title: 'عن الجامعة', url: '/about' },
            { title: 'الأقسام', url: '/departments' },
            { title: 'أعضاء هيئة التدريس', url: '/staff' },
            { title: 'الأخبار', url: '/news' },
            { title: 'تواصل', url: '/contact' }
          ]
        },
        academicLinks: {
          title: 'أكاديمي',
          links: [
            { title: 'الدراسات العليا', url: '/postgraduate' },
            { title: 'مراكز البحث', url: '/research' },
            { title: 'مجلة الألسن', url: '/journal' },
            { title: 'التقويم الأكاديمي', url: '/calendar' }
          ]
        },
        resourceLinks: {
          title: 'الموارد',
          links: [
            { title: 'مركز اللغة والترجمة', url: '/centers/translation' },
            { title: 'فصل كونفوشيوس', url: '/centers/confucius' },
            { title: 'بوابة الطالب', url: '/student-portal' },
            { title: 'المكتبة', url: '/library' }
          ]
        },
        copyright: '© 2025 كلية الألسن – جامعة الأقصر. جميع الحقوق محفوظة.',
        contactMethods: {
          phone: '(+20) 095-2356555',
          email: 'info@alsun.luxor.edu.eg',
          universityWebsite: 'https://luxor.edu.eg',
          languages: [
            { value: 'en', label: 'English' },
            { value: 'ar', label: 'العربية' }
          ]
        }
      }
    }
  ];

  constructor() {}

  getAllMenus(): Observable<MenuItem[]> {
    return of(this.menus);
  }

  getMenuById(id: number): Observable<MenuItem | undefined> {
    return of(this.menus.find(menu => menu.id === id));
  }

  addMenu(menu: MenuItem): Observable<void> {
    menu.id = this.menus.length ? Math.max(...this.menus.map(m => m.id)) + 1 : 1;
    this.menus.push(menu);
    return of();
  }

  updateMenu(updatedMenu: MenuItem): Observable<void> {
    const index = this.menus.findIndex(menu => menu.id === updatedMenu.id);
    if (index !== -1) {
      this.menus[index] = updatedMenu;
    }
    return of();
  }

  deleteMenu(id: number): Observable<void> {
    this.menus = this.menus.filter(menu => menu.id !== id);
    return of();
  }

  setActiveMenu(id: number, type: MenuType, headerType?: HeaderType): Observable<void> {
    this.menus.forEach(menu => {
      if (menu.type === type && (!headerType || menu.headerType === headerType)) {
        menu.isActive = menu.id === id;
      }
    });
    return of();
  }

  getActiveHeader(headerType: HeaderType): Observable<MenuItem | undefined> {
    return of(this.menus.find(menu => menu.type === MenuType.HEADER && menu.headerType === headerType && menu.isActive));
  }

  refreshMenu() {
    // This method can be called to force menu refresh
    // The navbar component will automatically update due to the observable
  }

  getActiveFooter(): Observable<MenuItem | undefined> {
    return of(this.menus.find(menu => menu.type === MenuType.FOOTER && menu.isActive));
  }
}