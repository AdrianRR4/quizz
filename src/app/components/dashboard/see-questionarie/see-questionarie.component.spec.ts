import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeQuestionarieComponent } from './see-questionarie.component';

describe('SeeQuestionarieComponent', () => {
  let component: SeeQuestionarieComponent;
  let fixture: ComponentFixture<SeeQuestionarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeQuestionarieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeQuestionarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
