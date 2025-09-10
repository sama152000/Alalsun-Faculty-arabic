import { Injectable } from '@angular/core';
import { Observable, of, combineLatest, BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { MenuItem, MenuType, HeaderType, HeaderData, FooterData, NavbarItem } from '../model/menu.model';
import { CustomPageService } from './custom-page.service';
import { CustomPage } from '../model/custom-page.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menus: MenuItem[] = [
    {
      id: 1,
      name: 'القائمة الرئيسية الافتراضية',
      type: MenuType.HEADER,
      headerType: HeaderType.MAIN_NAV,
      isActive: true,
      data: {
        navbarItems: [
          { label: 'الرئيسية', route: '/home' },
          { label: 'عن الكلية', route: '/about' },
          { label: 'الأقسام', route: '/departments' },
          { label: 'أعضاء هيئة التدريس', route: '/staff' },
          { label: 'الأخبار', route: '/news' },
          { label: 'اتصل بنا', route: '/contact' },
          {
            label: 'القطاعات',
            children: [
              { label: 'شؤون التعليم والطلاب', route: '/sectors/education-students' },
              { label: 'الدراسات العليا والبحث العلمي', route: '/sectors/postgraduate-research' },
              { label: 'خدمة المجتمع وتنمية البيئة', route: '/sectors/community-environmental' },
            ]
          }
        ]
      }
    },
    {
      id: 2,
      name: 'التنقل العلوي الافتراضي',
      type: MenuType.HEADER,
      headerType: HeaderType.TOP_NAV,
      isActive: true,
      data: {}
    },
    {
      id: 3,
      name: 'القائمة الفرعية الافتراضية',
      type: MenuType.HEADER,
      headerType: HeaderType.SUBMENU,
      isActive: true,
      data: {
        submenu: {
          copyright: '© 2025 كلية الألسن. جميع الحقوق محفوظة.',
          contactMethods: {
            phone: '+1234567890',
            email: 'info@alsun.edu',
            universityWebsite: 'https://luxor-university.edu',
            languages: [
              { value: 'en', label: 'الإنجليزية' },
              { value: 'ar', label: 'العربية' }
            ]
          }
        }
      }
    },
    {
      id: 4,
      name: 'التذييل الافتراضي',
      type: MenuType.FOOTER,
      isActive: true,
      data: {
        title: 'كلية الألسن',
        subtitle: 'جامعة الأقصر',
        tagline: 'التميز في تعليم اللغات والترجمة',
        socialLinks: [
          { platform: 'فيسبوك', url: '#', icon: 'pi pi-facebook' },
          { platform: 'يوتيوب', url: '#', icon: 'pi pi-youtube' },
          { platform: 'لينكد إن', url: '#', icon: 'pi pi-linkedin' },
          { platform: 'تويتر', url: '#', icon: 'pi pi-twitter' }
        ],
        quickLinks: {
          title: 'روابط سريعة',
          links: [
            { title: 'عن الكلية', url: '/about' },
            { title: 'الأقسام', url: '/departments' },
            { title: 'أعضاء هيئة التدريس', url: '/staff' },
            { title: 'الأخبار', url: '/news' },
            { title: 'اتصل بنا', url: '/contact' }
          ]
        },
        academicLinks: {
          title: 'الأكاديمية',
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
            { title: 'مركز اللغات والترجمة', url: '/centers/translation' },
            { title: 'فصل كونفوشيوس', url: '/centers/confucius' },
            { title: 'بوابة الطلاب', url: '/student-portal' },
            { title: 'المكتبة', url: '/library' }
          ]
        },
        copyright: '© 2025 كلية الألسن - جامعة الأقصر. جميع الحقوق محفوظة.',
        contactMethods: {
          phone: '(+20) 095-2356555',
          email: 'info@alsun.luxor.edu.eg',
          universityWebsite: 'https://luxor.edu.eg',
          languages: [
            { value: 'en', label: 'الإنجليزية' },
            { value: 'ar', label: 'العربية' }
          ]
        }
      }
    }
  ];

  constructor(private customPageService: CustomPageService) {}

  // استرجاع جميع القوائم
  getAllMenus(): Observable<MenuItem[]> {
    return of(this.menus);
  }

  // استرجاع قائمة حسب المعرف
  getMenuById(id: number): Observable<MenuItem | undefined> {
    return of(this.menus.find(menu => menu.id === id));
  }

  // إضافة قائمة جديدة
  addMenu(menu: MenuItem): Observable<void> {
    menu.id = this.menus.length ? Math.max(...this.menus.map(m => m.id)) + 1 : 1;
    this.menus.push(menu);
    return of();
  }

  // تحديث قائمة موجودة
  updateMenu(updatedMenu: MenuItem): Observable<void> {
    const index = this.menus.findIndex(menu => menu.id === updatedMenu.id);
    if (index !== -1) {
      this.menus[index] = updatedMenu;
    }
    return of();
  }

  // حذف قائمة
  deleteMenu(id: number): Observable<void> {
    this.menus = this.menus.filter(menu => menu.id !== id);
    return of();
  }

  // تعيين القائمة النشطة
  setActiveMenu(id: number, type: MenuType, headerType?: HeaderType): Observable<void> {
    this.menus.forEach(menu => {
      if (menu.type === type && (!headerType || menu.headerType === headerType)) {
        menu.isActive = menu.id === id;
      }
    });
    return of();
  }

  // استرجاع قائمة الرأس النشطة
  getActiveHeader(headerType: HeaderType): Observable<MenuItem | undefined> {
    if (headerType === HeaderType.MAIN_NAV) {
      return combineLatest([
        of(this.menus.find(menu => menu.type === MenuType.HEADER && menu.headerType === headerType && menu.isActive)),
        this.customPageService.getPublishedPages()
      ]).pipe(
        map(([menu, publishedPages]) => {
          if (!menu || !menu.data) return menu;

          const customPageItems: NavbarItem[] = publishedPages
            .slice(0, 7) // الحد الأقصى 7 صفحات
            .map(page => ({
              label: page.title,
              route: `/pages/${page.route}`
            }));

          const moreDropdown: NavbarItem = {
            label: 'المزيد+',
            children: customPageItems
          };

          const updatedMenu: MenuItem = {
            ...menu,
            data: {
              ...menu.data,
              navbarItems: [...((menu.data as HeaderData).navbarItems || []), moreDropdown]
            }
          };

          return updatedMenu;
        })
      );
    }
    return of(this.menus.find(menu => menu.type === MenuType.HEADER && menu.headerType === headerType && menu.isActive));
  }

  // تحديث القائمة
  refreshMenu() {
    // يمكن استدعاء هذه الطريقة لتحديث القائمة
    // مكون شريط التنقل سيتحدث تلقائيًا بفضل المراقبة
  }

  // استرجاع التذييل النشط
  getActiveFooter(): Observable<MenuItem | undefined> {
    return of(this.menus.find(menu => menu.type === MenuType.FOOTER && menu.isActive));
  }
}