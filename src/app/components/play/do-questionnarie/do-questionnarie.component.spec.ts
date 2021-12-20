import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoQuestionnarieComponent } from './do-questionnarie.component';

describe('DoQuestionnarieComponent', () => {
  let component: DoQuestionnarieComponent;
  let fixture: ComponentFixture<DoQuestionnarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoQuestionnarieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoQuestionnarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
