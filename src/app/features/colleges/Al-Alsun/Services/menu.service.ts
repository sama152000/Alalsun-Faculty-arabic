import { Injectable } from '@angular/core';
import { Observable, of, combineLatest, BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { MenuItem, MenuType, HeaderType, HeaderData, FooterData, NavbarItem } from '../model/menu.model';
import { CustomPageService } from './custom-page.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menus: MenuItem[] = [
    {
      id: 1,
      name: 'الرأس الافتراضي',
      type: MenuType.HEADER,
      headerType: HeaderType.MAIN_NAV,
      isActive: true,
      data: {
        navbarItems: [
          { label: 'الرئيسية', icon: 'pi pi-home me-2', route: '/home' },
          { label: 'عن الكلية', route: '/about' },
          { label: 'الأقسام', route: '/departments' },
          { label: 'أعضاء هيئة التدريس', route: '/staff' },
          { label: 'أخبار', route: '/news' },
          { label: 'اتصل بنا', route: '/contact' },
          {
            label: 'القطاعات',
            children: [
              { label: 'شؤون التعليم وشؤون الطلاب', icon: 'pi pi-users me-2', route: '/sectors/education-students' },
              { label: 'الدراسات العليا والبحث العلمي', icon: 'pi pi-graduation-cap me-2', route: '/sectors/postgraduate-research' },
              { label: 'خدمة المجتمع والتنمية البيئية', icon: 'pi pi-globe me-2', route: '/sectors/community-environmental' },
            ]
          }
        ]
      }
    },
    {
      id: 2,
      name: 'القائمة العلوية الافتراضية',
      type: MenuType.HEADER,
      headerType: HeaderType.TOP_NAV,
      isActive: true,
      data: {
        facultyInfo: {
          logoUrl: 'assets/logo.jpg',
          name: 'كلية الألسن',
          subtitle: 'جامعة الأقصر',
          universityName: 'كلية الالسن',
          established: 'تأسست 2019'
        }
      }
    },
    {
      id: 3,
      name: 'القائمة الفرعية الافتراضية',
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
      name: 'تذييل الصفحة الافتراضي',
      type: MenuType.FOOTER,
      isActive: true,
      data: {
        logoIcon: 'pi pi-book',
        title: 'كلية الألسن',
        subtitle: 'جامعة الأقصر',
        tagline: 'التميز في تعليم اللغات والترجمة',
        socialLinks: [
          { platform: 'فيسبوك', url: '#', icon: 'pi pi-facebook' },
          { platform: 'يوتيوب', url: '#', icon: 'pi pi-youtube' },
          { platform: 'لينكدإن', url: '#', icon: 'pi pi-linkedin' },
          { platform: 'تويتر', url: '#', icon: 'pi pi-twitter' }
        ],
        quickLinks: {
          title: 'روابط سريعة',
          links: [
            { title: 'من نحن', url: '/about' },
            { title: 'الأقسام', url: '/departments' },
            { title: 'أعضاء هيئة التدريس', url: '/staff' },
            { title: 'أخبار', url: '/news' },
            { title: 'اتصل بنا', url: '/contact' }
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
          title: 'مصادر',
          links: [
            { title: 'مركز اللغة والترجمة', url: '/centers/translation' },
            { title: 'فصل الكونفوشيوس', url: '/centers/confucius' },
            { title: 'بوابة الطلاب', url: '/student-portal' },
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

  constructor(private customPageService: CustomPageService) {}

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

  refreshMenu() {
    // يمكن استدعاء هذه الطريقة لفرض تحديث القائمة
    // سيتحدث مكون القائمة تلقائيًا بسبب المشاهد الملحوظة
  }

  getActiveFooter(): Observable<MenuItem | undefined> {
    return of(this.menus.find(menu => menu.type === MenuType.FOOTER && menu.isActive));
  }
}