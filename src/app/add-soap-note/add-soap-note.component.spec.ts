import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSoapNoteComponent } from './add-soap-note.component';

describe('AddSoapNoteComponent', () => {
  let component: AddSoapNoteComponent;
  let fixture: ComponentFixture<AddSoapNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSoapNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSoapNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
