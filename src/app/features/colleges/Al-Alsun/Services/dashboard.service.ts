import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardStats, RecentActivity, QuickAction, SystemHealth } from '../model/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  // الحصول على إحصائيات لوحة التحكم
  getDashboardStats(): Observable<DashboardStats> {
    const stats: DashboardStats = {
      totalDepartments: 8, // إجمالي الأقسام
      totalStaff: 23, // إجمالي أعضاء هيئة التدريس
      totalNews: 15, // إجمالي المقالات الإخبارية
      totalMedia: 156, // إجمالي ملفات الوسائط
      totalStudents: 705, // إجمالي الطلاب
      totalSectors: 3, // إجمالي القطاعات
      publishedPages: 12, // الصفحات المنشورة
      draftPages: 3 // الصفحات المسودة
    };
    return of(stats);
  }

  // الحصول على الأنشطة الأخيرة
  getRecentActivities(): Observable<RecentActivity[]> {
    const activities: RecentActivity[] = [
      {
        id: '1',
        action: 'تم التحديث', // تحديث
        target: 'قسم اللغة الإنجليزية', // قسم اللغة الإنجليزية
        user: 'المستخدم المشرف', // المستخدم المشرف
        timestamp: '2025-01-15T14:30:00Z',
        details: 'تمت إضافة عضو هيئة تدريس جديد', // تفاصيل
        type: 'update' // نوع النشاط
      },
      {
        id: '2',
        action: 'تم النشر', // نشر
        target: 'مقال إخباري', // مقال إخباري
        user: 'المحرر', // المحرر
        timestamp: '2025-01-15T12:15:00Z',
        details: 'إعلان عن مؤتمر دولي', // تفاصيل
        type: 'publish' // نوع النشاط
      },
      {
        id: '3',
        action: 'تم الإنشاء', // إنشاء
        target: 'عضو هيئة تدريس', // عضو هيئة تدريس
        user: 'المستخدم المشرف', // المستخدم المشرف
        timestamp: '2025-01-15T10:45:00Z',
        details: 'ملف الدكتور أحمد مصطفى', // تفاصيل
        type: 'create' // نوع النشاط
      },
      {
        id: '4',
        action: 'تم التحديث', // تحديث
        target: 'معرض الوسائط', // معرض الوسائط
        user: 'مدير المحتوى', // مدير المحتوى
        timestamp: '2025-01-15T09:20:00Z',
        details: 'تم رفع 5 صور جديدة', // تفاصيل
        type: 'update' // نوع النشاط
      },
      {
        id: '5',
        action: 'تم الحذف', // حذف
        target: 'صفحة مسودة', // صفحة مسودة
        user: 'المحرر', // المحرر
        timestamp: '2025-01-14T16:30:00Z',
        details: 'تم إزالة محتوى قديم', // تفاصيل
        type: 'delete' // نوع النشاط
      }
    ];
    return of(activities);
  }

  // الحصول على الإجراءات السريعة
  getQuickActions(): Observable<QuickAction[]> {
    const actions: QuickAction[] = [
      {
        title: 'إضافة قسم', // إضافة قسم
        description: 'إنشاء قسم أكاديمي جديد', // وصف
        icon: 'pi pi-building',
        route: '/admin/departments/add',
        color: 'primary'
      },
      {
        title: 'إضافة عضو هيئة تدريس', // إضافة عضو هيئة تدريس
        description: 'إضافة عضو هيئة تدريس أو موظف جديد', // وصف
        icon: 'pi pi-user-plus',
        route: '/admin/staff/add',
        color: 'success'
      },
      {
        title: 'إنشاء منشور إخباري', // إنشاء منشور إخباري
        description: 'نشر أخبار وإعلانات', // وصف
        icon: 'pi pi-file-plus',
        route: '/admin/news/add',
        color: 'warning'
      },
      {
        title: 'رفع وسائط', // رفع وسائط
        description: 'إضافة صور أو مقاطع فيديو أو مستندات', // وصف
        icon: 'pi pi-upload',
        route: '/admin/media',
        color: 'info'
      },
      {
        title: 'إدارة القطاعات', // إدارة القطاعات
        description: 'تكوين قطاعات الكلية', // وصف
        icon: 'pi pi-sitemap',
        route: '/admin/sectors',
        color: 'secondary'
      },
      {
        title: 'إعدادات الموقع', // إعدادات الموقع
        description: 'تكوين إعدادات الموقع', // وصف
        icon: 'pi pi-cog',
        route: '/admin/settings',
        color: 'dark'
      }
    ];
    return of(actions);
  }

  // الحصول على حالة النظام
  getSystemHealth(): Observable<SystemHealth> {
    const health: SystemHealth = {
      status: 'healthy', // الحالة
      uptime: '15 يومًا، 8 ساعات', // مدة التشغيل
      lastBackup: '2025-01-15T02:00:00Z', // آخر نسخة احتياطية
      storageUsed: 2.4, // التخزين المستخدم
      storageTotal: 10.0 // إجمالي التخزين
    };
    return of(health);
  }
}