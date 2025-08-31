/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HomeNews.serviceService } from './home-news.service.service';

describe('Service: HomeNews.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeNews.serviceService]
    });
  });

  it('should ...', inject([HomeNews.serviceService], (service: HomeNews.serviceService) => {
    expect(service).toBeTruthy();
  }));
});
