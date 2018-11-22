import { TestBed, inject } from '@angular/core/testing';

import { HospitalStaffService } from './hospital-staff.service';

describe('HospitalStaffService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HospitalStaffService]
    });
  });

  it('should be created', inject([HospitalStaffService], (service: HospitalStaffService) => {
    expect(service).toBeTruthy();
  }));
});
