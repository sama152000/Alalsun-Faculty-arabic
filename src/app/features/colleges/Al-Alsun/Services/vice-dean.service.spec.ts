/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ViceDeanService } from './vice-dean.service';

describe('Service: ViceDean', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViceDeanService]
    });
  });

  it('should ...', inject([ViceDeanService], (service: ViceDeanService) => {
    expect(service).toBeTruthy();
  }));
});
