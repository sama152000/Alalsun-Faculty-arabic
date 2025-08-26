import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  icon: string;
  value: string;
  label: string;
  color: string;
}

@Component({
  selector: 'app-quick-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-stats.component.html',
  styleUrls: ['./quick-stats.component.css']
})
export class QuickStatsComponent {
  stats: Stat[] = [
    {
      icon: 'pi pi-users',
      value: '705+',
      label: 'الطلاب المسجلون',
      color: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)'
    },
    {
      icon: 'pi pi-building',
      value: '8',
      label: 'الأقسام الأكاديمية',
      color: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)'
    },
    {
      icon: 'pi pi-graduation-cap',
      value: '23',
      label: 'أعضاء هيئة التدريس والمساعدون',
      color: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)'
    },
    {
      icon: 'pi pi-book',
      value: '1',
      label: 'مجلة محكمة',
      color: 'linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%)'
    }
  ];
}