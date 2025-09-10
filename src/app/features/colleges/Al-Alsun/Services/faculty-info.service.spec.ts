/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FacultyInfoService } from './faculty-info.service';

describe('Service: FacultyInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacultyInfoService]
    });
  });

  it('should ...', inject([FacultyInfoService], (service: FacultyInfoService) => {
    expect(service).toBeTruthy();
  }));
});
