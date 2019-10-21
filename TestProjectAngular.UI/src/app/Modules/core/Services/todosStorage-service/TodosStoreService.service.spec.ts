/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodosStoreServiceService } from './TodosStoreService.service';

describe('Service: TodosStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosStoreServiceService]
    });
  });

  it('should ...', inject([TodosStoreServiceService], (service: TodosStoreServiceService) => {
    expect(service).toBeTruthy();
  }));
});
