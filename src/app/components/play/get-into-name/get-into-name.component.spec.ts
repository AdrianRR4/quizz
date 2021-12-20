import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIntoNameComponent } from './get-into-name.component';

describe('GetIntoNameComponent', () => {
  let component: GetIntoNameComponent;
  let fixture: ComponentFixture<GetIntoNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetIntoNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetIntoNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
