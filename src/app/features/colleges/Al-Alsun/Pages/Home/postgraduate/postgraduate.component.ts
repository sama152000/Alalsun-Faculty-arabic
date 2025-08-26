import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-postgraduate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './postgraduate.component.html',
  styleUrls: ['./postgraduate.component.css']
})
export class PostgraduateComponent {
  programs = [
    {
      type: 'الدبلوم',
      courses: [
        'اللغة العربية (الأدب / اللغويات)',
        'اللغة الإنجليزية (الأدب)',
        'اللغة الفرنسية (الأدب واللغة)'
      ]
    },
    {
      type: 'الماجستير',
      courses: [
        'اللغة العربية (الأدب / اللغويات)',
        'اللغة الإنجليزية (الأدب)',
        'اللغة الفرنسية (الأدب واللغة)'
      ]
    },
    {
      type: 'الدكتوراه',
      courses: [
        'اللغة العربية (الأدب / اللغويات)',
        'اللغة الإنجليزية (الأدب)'
      ]
    }
  ];
}