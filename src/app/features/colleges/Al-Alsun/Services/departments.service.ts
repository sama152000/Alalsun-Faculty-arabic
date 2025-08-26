import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Department } from '../model/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  private mockDepartments: Department[] = [
    {
      id: '1',
      name: 'قسم اللغة الإنجليزية',
      shortName: 'قسم الإنجليزية',
      overview: 'يقدم قسم اللغة الإنجليزية برامج شاملة في الأدب، اللغويات، والترجمة. تأسس في عام 2016 ويهدف إلى إعداد الخريجين لسوق العمل بمهارات لغوية وبحثية قوية.',
      type: 'undergraduate',
      image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg',
      icon: 'pi pi-book',
      established: '2016',
      programs: [
        {
          id: 'p1',
          name: 'بكالوريوس في الأدب الإنجليزي',
          description: 'دراسة الأدب الإنجليزي الكلاسيكي والحديث مع التركيز على التحليل النقدي.',
          duration: '4 سنوات',
          degree: 'بكالوريوس'
        },
        {
          id: 'p2',
          name: 'بكالوريوس في الترجمة',
          description: 'تطوير مهارات الترجمة والتفسير من الإنجليزية إلى العربية والعكس.',
          duration: '4 سنوات',
          degree: 'بكالوريوس'
        }
      ],
      faculty: [
        {
          id: 'f1',
          name: 'د. أحمد مصطفى',
          title: 'أستاذ',
          specialization: 'الأدب الإنجليزي',
          email: 'ahmed.mostafa@luxor.edu',
          photo: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg'
        },
        {
          id: 'f2',
          name: 'د. سارة علي',
          title: 'أستاذ مشارك',
          specialization: 'اللغويات',
          email: 'sarah.ali@luxor.edu'
        }
      ],
      activities: [
        {
          id: 'a1',
          title: 'ندوة الأدب السنوية',
          description: 'مؤتمر للطلاب لعرض أبحاثهم في الأدب الإنجليزي.',
          date: '2025-03-15',
          image: 'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg'
        }
      ],
      contact: {
        email: 'english.dept@luxor.edu',
        phone: '+20 123 456 7890',
        office: 'المبنى أ، غرفة 101',
        headOfDepartment: 'د. أحمد مصطفى'
      },
      route: '/alalsun-faculty/departments/english'
    },
    {
      id: '2',
      name: 'قسم اللغة العربية',
      shortName: 'قسم العربية',
      overview: 'متخصص في اللغويات العربية، الأدب، والدراسات الثقافية. يخدم القسم أيضًا المتحدثين غير الناطقين بالعربية.',
      type: 'undergraduate',
      image: 'https://images.pexels.com/photos/3014019/pexels-photo-3014019.jpeg',
      icon: 'pi pi-book',
      established: '2016',
      programs: [
        {
          id: 'p3',
          name: 'بكالوريوس في الأدب العربي',
          description: 'دراسة الأدب العربي، النقد، واللغويات.',
          duration: '4 سنوات',
          degree: 'بكالوريوس'
        },
        {
          id: 'p4',
          name: 'دبلوم في اللغويات العربية',
          description: 'دراسة عليا لهياكل اللغة العربية والصوتيات.',
          duration: 'سنتان',
          degree: 'دبلوم'
        }
      ],
      faculty: [
        {
          id: 'f3',
          name: 'د. فاطمة حسن',
          title: 'أستاذ',
          specialization: 'الأدب العربي',
          email: 'fatima.hassan@luxor.edu',
          photo: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg'
        }
      ],
      activities: [
        {
          id: 'a2',
          title: 'ورشة الشعر العربي',
          description: 'ورشة عمل للطلاب لاستكشاف الشعر العربي الكلاسيكي والحديث.',
          date: '2025-04-10'
        }
      ],
      contact: {
        email: 'arabic.dept@luxor.edu',
        phone: '+20 987 654 3210',
        office: 'المبنى ب، غرفة 202',
        headOfDepartment: 'د. فاطمة حسن'
      },
      route: '/alalsun-faculty/departments/arabic'
    },
    {
      id: '3',
      name: 'قسم اللغة الفرنسية',
      shortName: 'قسم الفرنسية',
      overview: 'يركز على اللغة الفرنسية، الأدب، والدراسات الثقافية للطلاب الجامعيين.',
      type: 'undergraduate',
      image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
      icon: 'pi pi-book',
      established: '2016',
      programs: [
        {
          id: 'p5',
          name: 'بكالوريوس في اللغة الفرنسية',
          description: 'دراسة شاملة للغة الفرنسية والثقافة الفرنسية.',
          duration: '4 سنوات',
          degree: 'بكالوريوس'
        }
      ],
      faculty: [
        {
          id: 'f4',
          name: 'د. جان دوبون',
          title: 'أستاذ مشارك',
          specialization: 'الأدب الفرنسي',
          email: 'jean.dupont@luxor.edu'
        }
      ],
      activities: [
        {
          id: 'a3',
          title: 'مهرجان الأفلام الفرنسية',
          description: 'عرض السينما الفرنسية مع مناقشات طلابية.',
          date: '2025-05-20',
          image: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg'
        }
      ],
      contact: {
        email: 'french.dept@luxor.edu',
        office: 'المبنى ج، غرفة 303',
        headOfDepartment: 'د. جان دوبون'
      },
      route: '/alalsun-faculty/departments/french'
    },
    {
      id: '4',
      name: 'قسم اللغة الألمانية',
      shortName: 'قسم الألمانية',
      overview: 'يوفر قسم اللغة الألمانية للطلاب مهارات اللغة، الأدب، والترجمة، مع التركيز على الثقافة الألمانية.',
      type: 'undergraduate',
      image: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg',
      icon: 'pi pi-book',
      established: '2016',
      programs: [
        {
          id: 'p6',
          name: 'بكالوريوس في الدراسات الألمانية',
          description: 'يغطي اللغة الألمانية، الأدب، ودراسات الترجمة.',
          duration: '4 سنوات',
          degree: 'بكالوريوس'
        }
      ],
      faculty: [
        {
          id: 'f5',
          name: 'د. هانز مولر',
          title: 'محاضر',
          specialization: 'اللغويات الألمانية',
          email: 'hans.muller@luxor.edu'
        }
      ],
      activities: [
        {
          id: 'a4',
          title: 'يوم الثقافة الألمانية',
          description: 'احتفال سنوي بالثقافة الألمانية مع ورش عمل وعروض أدائية.',
          date: '2025-06-01'
        }
      ],
      contact: {
        email: 'german.dept@luxor.edu',
        office: 'المبنى د، غرفة 201',
        headOfDepartment: 'د. هانز مولر'
      },
      route: '/alalsun-faculty/departments/german'
    },
    {
      id: '5',
      name: 'قسم اللغة الصينية',
      shortName: 'قسم الصينية',
      overview: 'مكرس لتعليم اللغة الصينية والثقافة الصينية، مع فرص للتبادل عبر فصل كونفوشيوس.',
      type: 'undergraduate',
      image: 'https://images.pexels.com/photos/3204950/pexels-photo-3204950.jpeg',
      icon: 'pi pi-book',
      established: '2019',
      programs: [
        {
          id: 'p7',
          name: 'بكالوريوس في اللغة الصينية',
          description: 'دراسة شاملة للغة الصينية، الثقافة، والترجمة.',
          duration: '4 سنوات',
          degree: 'بكالوريوس'
        }
      ],
      faculty: [
        {
          id: 'f6',
          name: 'د. لي وي',
          title: 'محاضر',
          specialization: 'الأدب الصيني',
          email: 'li.wei@luxor.edu'
        }
      ],
      activities: [
        {
          id: 'a5',
          title: 'مهرجان الثقافة الصينية',
          description: 'عرض الفنون الصينية، أنشطة اللغة، وورش الخط الصيني.',
          date: '2025-07-10'
        }
      ],
      contact: {
        email: 'chinese.dept@luxor.edu',
        office: 'المبنى هـ، غرفة 305',
        headOfDepartment: 'د. لي وي'
      },
      route: '/alalsun-faculty/departments/chinese'
    },
    {
      id: '6',
      name: 'قسم اللغة الإيطالية',
      shortName: 'قسم الإيطالية',
      overview: 'يركز على اللغة الإيطالية والأدب، ويزود الطلاب بمعرفة الترجمة والثقافة.',
      type: 'undergraduate',
      image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg',
      icon: 'pi pi-book',
      established: '2016',
      programs: [
        {
          id: 'p8',
          name: 'بكالوريوس في الدراسات الإيطالية',
          description: 'يغطي اللغة الإيطالية، الأدب، ودراسات الترجمة.',
          duration: '4 سنوات',
          degree: 'بكالوريوس'
        }
      ],
      faculty: [
        {
          id: 'f7',
          name: 'د. ماريا روسي',
          title: 'أستاذ مساعد',
          specialization: 'الأدب الإيطالي',
          email: 'maria.rossi@luxor.edu'
        }
      ],
      activities: [
        {
          id: 'a6',
          title: 'ندوة الفن والثقافة الإيطالية',
          description: 'حدث لاستكشاف الفن الإيطالي، الثقافة، وممارسة اللغة.',
          date: '2025-08-15'
        }
      ],
      contact: {
        email: 'italian.dept@luxor.edu',
        office: 'المبنى و، غرفة 104',
        headOfDepartment: 'د. ماريا روسي'
      },
      route: '/alalsun-faculty/departments/italian'
    },
    {
      id: '7',
      name: 'قسم اللغة الإسبانية',
      shortName: 'قسم الإسبانية',
      overview: 'يقدم دورات في اللغة الإسبانية، الأدب، وثقافة أمريكا اللاتينية.',
      type: 'undergraduate',
      image: 'https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg',
      icon: 'pi pi-book',
      established: '2016',
      programs: [
        {
          id: 'p9',
          name: 'بكالوريوس في الدراسات الإسبانية',
          description: 'برنامج شامل يغطي الأدب الإسباني وثقافة أمريكا اللاتينية.',
          duration: '4 سنوات',
          degree: 'بكالوريوس'
        }
      ],
      faculty: [
        {
          id: 'f8',
          name: 'د. كارلوس غوميز',
          title: 'أستاذ مشارك',
          specialization: 'الأدب الإسباني',
          email: 'carlos.gomez@luxor.edu'
        }
      ],
      activities: [
        {
          id: 'a7',
          title: 'أسبوع الثقافة الإسبانية',
          description: 'فعاليات تركز على الثقافات الإسبانية وأمريكا اللاتينية.',
          date: '2025-09-20'
        }
      ],
      contact: {
        email: 'spanish.dept@luxor.edu',
        office: 'المبنى ز، غرفة 207',
        headOfDepartment: 'د. كارلوس غوميز'
      },
      route: '/alalsun-faculty/departments/spanish'
    },
    {
      id: '8',
      name: 'قسم اللغة الروسية',
      shortName: 'قسم الروسية',
      overview: 'يقدم دراسات في اللغة الروسية، الأدب، والثقافة، مع فرص لممارسة الترجمة.',
      type: 'undergraduate',
      image: 'https://images.pexels.com/photos/8848995/pexels-photo-8848995.jpeg',
      icon: 'pi pi-book',
      established: '2016',
      programs: [
        {
          id: 'p10',
          name: 'بكالوريوس في الدراسات الروسية',
          description: 'يغطي اللغة الروسية، الأدب، ومهارات الترجمة.',
          duration: '4 سنوات',
          degree: 'بكالوريوس'
        }
      ],
      faculty: [
        {
          id: 'f9',
          name: 'د. إيفان بيتروف',
          title: 'أستاذ',
          specialization: 'اللغويات الروسية',
          email: 'ivan.petrov@luxor.edu'
        }
      ],
      activities: [
        {
          id: 'a8',
          title: 'مؤتمر الأدب الروسي',
          description: 'مؤتمر حول الأدب الروسي ودراسات الترجمة.',
          date: '2025-10-05'
        }
      ],
      contact: {
        email: 'russian.dept@luxor.edu',
        office: 'المبنى ح، غرفة 108',
        headOfDepartment: 'د. إيفان بيتروف'
      },
      route: '/alalsun-faculty/departments/russian'
    }
  ];

  getAllDepartments(): Observable<Department[]> {
    return of(this.mockDepartments);
  }
}