import { Injectable } from '@angular/core';
import { StaffMember, Department } from '../model/staff.model';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private staffMembers: StaffMember[] = [
    {
      id: 1,
      name: 'أ.د. محمود النوبي أحمد سليمان',
      position: 'عميد الكلية',
      department: 'الإدارة',
      email: 'dean@alsun.luxor.edu.eg',
      image: 'assets/Picture1.jpg',
      bio: 'قائد أكاديمي متميز يمتلك خبرة واسعة في تعليم اللغات والإدارة.',
      specialization: 'القيادة الأكاديمية، تعليم اللغات',
      education: ['دكتوراه في اللغويات التطبيقية', 'ماجستير في الأدب الإنجليزي'],
      experience: ['عميد كلية الألسن (2020-حتى الآن)', 'أستاذ اللغة الإنجليزية (2015-2020)'],
      researchInterests: ['سياسات اللغة', 'القيادة التعليمية', 'التواصل بين الثقافات']
    },
    {
      id: 2,
      name: 'أ.م.د. محمد أحمد سيد حمزة',
      position: 'وكيل الكلية لشئون التعليم والطلاب',
      department: 'الإدارة',
      email: 'vice.education@alsun.luxor.edu.eg',
      image: 'assets/Picture2.jpg',
      bio: 'مربٍ مكرس يركز على تطوير الطلاب والتميز الأكاديمي.',
      specialization: 'شئون الطلاب، التطوير التعليمي',
      education: ['دكتوراه في التربية', 'ماجستير في اللغويات التطبيقية'],
      experience: ['وكيل الكلية (2019-حتى الآن)', 'أستاذ مشارك (2016-2019)'],
      researchInterests: ['تطوير الطلاب', 'علم النفس التربوي', 'اكتساب اللغة']
    },
    {
      id: 3,
      name: 'أ.د. يوسف عباس علي',
      position: 'وكيل الكلية للدراسات العليا والبحث العلمي',
      department: 'الإدارة',
      email: 'vice.research@alsun.luxor.edu.eg',
      image: 'assets/Picture3.jpg',
      bio: 'باحث رائد في دراسات اللغة مع العديد من المنشورات والمشاريع البحثية.',
      specialization: 'منهجيات البحث، الدراسات العليا',
      education: ['دكتوراه في اللغويات', 'ماجستير في دراسات الترجمة'],
      experience: ['وكيل الكلية للبحث (2018-حتى الآن)', 'أستاذ (2014-2018)'],
      researchInterests: ['دراسات الترجمة', 'اللغويات القائمة على النصوص', 'منهجيات البحث']
    },
    {
      id: 4,
      name: 'أ.م.د. محمود حمزة محمد',
      position: 'وكيل الكلية لخدمة المجتمع وتنمية البيئة',
      department: 'الإدارة',
      email: 'vice.community@alsun.luxor.edu.eg',
      image: 'assets/Picture5.jpg',
      bio: 'أخصائي التفاعل المجتمعي يعمل على مشاريع التنمية المستدامة.',
      specialization: 'التنمية المجتمعية، الدراسات البيئية',
      education: ['دكتوراه في الدراسات البيئية', 'ماجستير في التنمية الاجتماعية'],
      experience: ['وكيل الكلية لخدمة المجتمع (2019-حتى الآن)', 'أستاذ مشارك (2016-2019)'],
      researchInterests: ['التنمية المستدامة', 'التفاعل المجتمعي', 'السياسات البيئية']
    },
    {
      id: 5,
      name: 'د. أحمد مصطفى',
      position: 'أستاذ',
      department: 'اللغة الإنجليزية',
      email: 'ahmed.mostafa@luxor.edu.eg',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=500',
      bio: 'خبير في الأدب الإنجليزي مع التركيز على الأعمال المعاصرة والكلاسيكية.',
      specialization: 'الأدب الإنجليزي، النقد الأدبي',
      education: ['دكتوراه في الأدب الإنجليزي', 'ماجستير في الأدب المقارن'],
      experience: ['أستاذ (2018-حتى الآن)', 'أستاذ مشارك (2014-2018)'],
      researchInterests: ['الأدب الفيكتوري', 'الدراسات ما بعد الاستعمار', 'النظرية الأدبية']
    },
    {
      id: 6,
      name: 'د. سارة علي',
      position: 'أستاذ مشارك',
      department: 'اللغة الإنجليزية',
      email: 'sarah.ali@luxor.edu.eg',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=500',
      bio: 'أخصائية لغويات مع خبرة في الصوتيات واكتساب اللغة.',
      specialization: 'اللغويات، الصوتيات',
      education: ['دكتوراه في اللغويات التطبيقية', 'ماجستير في الصوتيات'],
      experience: ['أستاذ مشارك (2017-حتى الآن)', 'أستاذ مساعد (2013-2017)'],
      researchInterests: ['تحليل الصوتيات', 'اكتساب اللغة الثانية', 'اللغويات الاجتماعية']
    },
    {
      id: 7,
      name: 'د. فاطمة حسن',
      position: 'أستاذ',
      department: 'اللغة العربية',
      email: 'fatima.hassan@luxor.edu.eg',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=500',
      bio: 'باحثة مرموقة في الأدب العربي مع أبحاث مكثفة في النصوص الكلاسيكية والحديثة.',
      specialization: 'الأدب العربي، الدراسات الكلاسيكية',
      education: ['دكتوراه في الأدب العربي', 'ماجستير في العربية الكلاسيكية'],
      experience: ['أستاذ (2016-حتى الآن)', 'أستاذ مشارك (2012-2016)'],
      researchInterests: ['الشعر العربي الكلاسيكي', 'الأدب العربي الحديث', 'النقد الأدبي']
    },
    {
      id: 8,
      name: 'د. جان دوبون',
      position: 'أستاذ مشارك',
      department: 'اللغة الفرنسية',
      email: 'jean.dupont@luxor.edu.eg',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=500',
      bio: 'خبير في الأدب الفرنسي مع تخصص في أعمال القرنين التاسع عشر والعشرين.',
      specialization: 'الأدب الفرنسي، الدراسات الثقافية',
      education: ['دكتوراه في الأدب الفرنسي', 'ماجستير في اللغات الرومانسية'],
      experience: ['أستاذ مشارك (2018-حتى الآن)', 'أستاذ مساعد (2014-2018)'],
      researchInterests: ['الرومانسية الفرنسية', 'الأدب الفرنسي المعاصر', 'التبادل الثقافي الفرنسي-العربي']
    }
  ];

  private departments: Department[] = [
    { id: 'administration', name: 'الإدارة' },
    { id: 'arabic', name: 'اللغة العربية' },
    { id: 'english', name: 'اللغة الإنجليزية' },
    { id: 'french', name: 'اللغة الفرنسية' },
    { id: 'german', name: 'اللغة الألمانية' },
    { id: 'chinese', name: 'اللغة الصينية' },
    { id: 'italian', name: 'اللغة الإيطالية' },
    { id: 'spanish', name: 'اللغة الإسبانية' },
    { id: 'russian', name: 'اللغة الروسية' }
  ];

  getAllStaff(): StaffMember[] {
    return this.staffMembers;
  }

  getStaffById(id: number): StaffMember | undefined {
    return this.staffMembers.find(member => member.id === id);
  }

  getStaffByDepartment(department: string): StaffMember[] {
    return this.staffMembers.filter(member => 
      member.department.toLowerCase() === department.toLowerCase()
    );
  }

  getDepartments(): Department[] {
    return this.departments;
  }

  searchStaff(query: string): StaffMember[] {
    const searchTerm = query.toLowerCase();
    return this.staffMembers.filter(member =>
      member.name.toLowerCase().includes(searchTerm) ||
      member.department.toLowerCase().includes(searchTerm) ||
      member.position.toLowerCase().includes(searchTerm)
    );
  }
}