import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { SectorData, ViceDeanInfo, SectorDepartment, SectorService, NewsItem, MediaItem, SectorStatistic, ActivityItem, Achievement } from '../model/sector.model';
import { SectorDetail } from '../model/sector-detail.model';
import { SectorPost } from '../model/sector-post.model';
import { SectorProgram } from '../model/sector-program.model';
import { SectorServiceItem } from '../model/sector-service.model';
import { SectorUnit } from '../model/sector-unit.model';

@Injectable({
  providedIn: 'root'
})
export class SectorsService {
  private apiUrl = environment.apiUrl || 'http://alisoncollege.runasp.net';

  constructor(private http: HttpClient) {}

  // جلب جميع القطاعات
  getAllSectors(): Observable<SectorData[]> {
    return this.http.get<any>(`${this.apiUrl}/api/v1/sectors/getall`, {
      headers: { 'Accept-Language': 'ar' }
    }).pipe(
      map(res => {
        if (res.success && res.data) {
          return Array.isArray(res.data) ? res.data : [];
        }
        return [];
      }),
      catchError(error => {
        console.error('Error fetching sectors:', error);
        return of([]);
      })
    );
  }

  // جلب قطاع واحد حسب المعرف
  getSectorById(id: string): Observable<SectorData | null> {
    return this.http.get<any>(`${this.apiUrl}/api/v1/sectors/get/${id}`, {
      headers: { 'Accept-Language': 'ar' }
    }).pipe(
      map(res => res.success && res.data ? res.data : null),
      catchError(error => {
        console.log('Error fetching sector by id:', error);
        return of(null);
      })
    );
  }

  // جلب تفاصيل القطاعات
  getAllSectorDetails(): Observable<SectorDetail[]> {
    return this.http.get<any>(`${this.apiUrl}/api/v1/sectordetails/getall`, {
      headers: { 'Accept-Language': 'ar' }
    }).pipe(
      map(res => res.success && res.data ? res.data : []),
      catchError(error => {
        console.log('Error fetching sector details:', error);
        return of([]);
      })
    );
  }

  // جلب المنشورات الخاصة بالقطاعات
  getAllSectorPosts(): Observable<SectorPost[]> {
    return this.http.get<any>(`${this.apiUrl}/api/v1/sectorposts/getall`, {
      headers: { 'Accept-Language': 'ar' }
    }).pipe(
      map(res => res.success && res.data ? res.data : []),
      catchError(error => {
        console.log('Error fetching sector posts:', error);
        return of([]);
      })
    );
  }

  // جلب البرامج الخاصة بالقطاعات
  getAllSectorPrograms(): Observable<SectorProgram[]> {
    return this.http.get<any>(`${this.apiUrl}/api/v1/sectorprograms/getall`, {
      headers: { 'Accept-Language': 'ar' }
    }).pipe(
      map(res => res.success && res.data ? res.data : []),
      catchError(error => {
        console.log('Error fetching sector programs:', error);
        return of([]);
      })
    );
  }

  // جلب الخدمات الخاصة بالقطاعات
  getAllSectorServices(): Observable<SectorServiceItem[]> {
    return this.http.get<any>(`${this.apiUrl}/api/v1/sectorservices/getall`, {
      headers: { 'Accept-Language': 'ar' }
    }).pipe(
      map(res => res.success && res.data ? res.data : []),
      catchError(error => {
        console.log('Error fetching sector services:', error);
        return of([]);
      })
    );
  }

  // جلب الوحدات الخاصة بالقطاعات
  getAllSectorUnits(): Observable<SectorUnit[]> {
    return this.http.get<any>(`${this.apiUrl}/api/v1/sectorunits/getall`, {
      headers: { 'Accept-Language': 'ar' }
    }).pipe(
      map(res => res.success && res.data ? res.data : []),
      catchError(error => {
        console.log('Error fetching sector units:', error);
        return of([]);
      })
    );
  }

  // إضافة قطاع جديد
  addSector(sector: SectorData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/v2/sectors/add`, sector, {
      headers: { 'Content-Type': 'application/json-patch+json', 'Accept-Language': 'ar' }
    }).pipe(
      catchError(error => {
        console.log('Error adding sector:', error);
        throw error;
      })
    );
  }

  // إضافة تفاصيل قطاع
  addSectorDetail(detail: SectorDetail): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/v2/sectordetails/add`, detail, {
      headers: { 'Content-Type': 'application/json-patch+json', 'Accept-Language': 'ar' }
    }).pipe(
      catchError(error => {
        console.log('Error adding sector detail:', error);
        throw error;
      })
    );
  }

  // إضافة منشور قطاع
  addSectorPost(post: SectorPost): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/v2/sectorposts/add`, post, {
      headers: { 'Content-Type': 'application/json-patch+json', 'Accept-Language': 'ar' }
    }).pipe(
      catchError(error => {
        console.log('Error adding sector post:', error);
        throw error;
      })
    );
  }

  // إضافة برنامج قطاع
  addSectorProgram(program: SectorProgram): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/v2/sectorprograms/add`, program, {
      headers: { 'Content-Type': 'application/json-patch+json', 'Accept-Language': 'ar' }
    }).pipe(
      catchError(error => {
        console.log('Error adding sector program:', error);
        throw error;
      })
    );
  }

  // إضافة خدمة قطاع
  addSectorService(service: SectorServiceItem): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/v2/sectorservices/add`, service, {
      headers: { 'Content-Type': 'application/json-patch+json', 'Accept-Language': 'ar' }
    }).pipe(
      catchError(error => {
        console.error('Error adding sector service:', error);
        throw error;
      })
    );
  }

  // إضافة وحدة قطاع
  addSectorUnit(unit: SectorUnit): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/v2/sectorunits/add`, unit, {
      headers: { 'Content-Type': 'application/json-patch+json', 'Accept-Language': 'ar' }
    }).pipe(
      catchError(error => {
        console.error('Error adding sector unit:', error);
        throw error;
      })
    );
  }

  // تعديل قطاع
  updateSector(id: string, sector: SectorData): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/v2/sectors/update/${id}`, sector, {
      headers: { 'Content-Type': 'application/json-patch+json', 'Accept-Language': 'ar' }
    }).pipe(
      catchError(error => {
        console.error('Error updating sector:', error);
        throw error;
      })
    );
  }

  // تعديل تفاصيل قطاع
  updateSectorDetail(id: string, detail: SectorDetail): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/v2/sectordetails/update/${id}`, detail, {
      headers: { 'Content-Type': 'application/json-patch+json', 'Accept-Language': 'ar' }
    }).pipe(
      catchError(error => {
        console.error('Error updating sector detail:', error);
        throw error;
      })
    );
  }

  // تعديل منشور قطاع
  updateSectorPost(id: string, post: SectorPost): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/v2/sectorposts/update/${id}`, post, {
      headers: { 'Content-Type': 'application/json-patch+json', 'Accept-Language': 'ar' }
    }).pipe(
      catchError(error => {
        console.error('Error updating sector post:', error);
        throw error;
      })
    );
  }

  // تعديل برنامج قطاع
  updateSectorProgram(id: string, program: SectorProgram): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/v2/sectorprograms/update/${id}`, program, {
      headers: { 'Content-Type': 'application/json-patch+json', 'Accept-Language': 'ar' }
    }).pipe(
      catchError(error => {
        console.error('Error updating sector program:', error);
        throw error;
      })
    );
  }

  // تعديل خدمة قطاع
  updateSectorService(id: string, service: SectorServiceItem): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/v2/sectorservices/update/${id}`, service, {
      headers: { 'Content-Type': 'application/json-patch+json', 'Accept-Language': 'ar' }
    }).pipe(
      catchError(error => {
        console.error('Error updating sector service:', error);
        throw error;
      })
    );
  }

  // تعديل وحدة قطاع
  updateSectorUnit(id: string, unit: SectorUnit): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/v2/sectorunits/update/${id}`, unit, {
      headers: { 'Content-Type': 'application/json-patch+json', 'Accept-Language': 'ar' }
    }).pipe(
      catchError(error => {
        console.error('Error updating sector unit:', error);
        throw error;
      })
    );
  }

  // حذف قطاع (Soft Delete)
  deleteSector(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/v2/sectors/deletesoft/${id}`, {
      headers: { 'Accept-Language': 'ar' }
    }).pipe(
      catchError(error => {
        console.error('Error deleting sector:', error);
        throw error;
      })
    );
  }

  // حذف تفاصيل القطاع
  deleteSectorDetail(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/v2/sectordetails/delete/${id}`, {
      headers: { 'Accept-Language': 'ar' }
    }).pipe(
      catchError(error => {
        console.error('Error deleting sector detail:', error);
        throw error;
      })
    );
  }

  // حذف منشور القطاع
  deleteSectorPost(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/v2/sectorposts/delete/${id}`, {
      headers: { 'Accept-Language': 'ar' }
    }).pipe(
      catchError(error => {
        console.error('Error deleting sector post:', error);
        throw error;
      })
    );
  }

  // حذف برنامج القطاع
  deleteSectorProgram(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/v2/sectorprograms/delete/${id}`, {
      headers: { 'Accept-Language': 'ar' }
    }).pipe(
      catchError(error => {
        console.error('Error deleting sector program:', error);
        throw error;
      })
    );
  }

  // حذف خدمة القطاع
  deleteSectorService(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/v2/sectorservices/delete/${id}`, {
      headers: { 'Accept-Language': 'ar' }
    }).pipe(
      catchError(error => {
        console.error('Error deleting sector service:', error);
        throw error;
      })
    );
  }

  // حذف وحدة القطاع
  deleteSectorUnit(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/v2/sectorunits/delete/${id}`, {
      headers: { 'Accept-Language': 'ar' }
    }).pipe(
      catchError(error => {
        console.error('Error deleting sector unit:', error);
        throw error;
      })
    );
  }
}
