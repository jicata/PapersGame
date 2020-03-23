import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitPapersComponent } from './submit-papers.component';

describe('SubmitPapersComponent', () => {
  let component: SubmitPapersComponent;
  let fixture: ComponentFixture<SubmitPapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitPapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
