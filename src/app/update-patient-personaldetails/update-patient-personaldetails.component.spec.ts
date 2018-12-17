import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePatientPersonaldetailsComponent } from './update-patient-personaldetails.component';

describe('UpdatePatientPersonaldetailsComponent', () => {
  let component: UpdatePatientPersonaldetailsComponent;
  let fixture: ComponentFixture<UpdatePatientPersonaldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePatientPersonaldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePatientPersonaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
