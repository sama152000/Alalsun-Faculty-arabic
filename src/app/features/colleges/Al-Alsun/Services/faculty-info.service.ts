import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FacultyInfo } from '../model/faculty-info.model';

@Injectable({
  providedIn: 'root'
})
export class FacultyInfoService {
  private facultyInfo: FacultyInfo = {
    logoUrl: './assets/logo.jpg',
    name: 'كلية الألسن',
    subtitle: 'جامعة الأقصر',
    universityName: 'جامعة الأقصر',
    established: 'تأسست 2019'
  };

  constructor() {}

  getFacultyInfo(): Observable<FacultyInfo> {
    return of(this.facultyInfo);
  }

  getAllContacts(): Observable<any[]> {
    return of([]);
  }

  updateFacultyInfo(updatedInfo: FacultyInfo): Observable<void> {
    this.facultyInfo = updatedInfo;
    return of();
  }
}