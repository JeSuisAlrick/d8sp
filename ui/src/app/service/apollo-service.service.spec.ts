import { TestBed, inject } from '@angular/core/testing';

import { ApolloServiceService } from './apollo-service.service';

describe('ApolloClientServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApolloServiceService]
    });
  });

  it('should be created', inject([ApolloServiceService], (service: ApolloServiceService) => {
    expect(service).toBeTruthy();
  }));
});
