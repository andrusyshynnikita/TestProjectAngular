/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodosStoreService } from './TodosStoreService.service';

describe('Service: TodosStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosStoreService]
    });
  });

  it('should ...', inject([TodosStoreService], (service: TodosStoreService) => {
    expect(service).toBeTruthy();
  }));
});
