/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BaseHttpService } from './baseHttp.service';

describe('Service: BaseHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseHttpService]
    });
  });

  it('should ...', inject([BaseHttpService], (service: BaseHttpService) => {
    expect(service).toBeTruthy();
  }));
});
