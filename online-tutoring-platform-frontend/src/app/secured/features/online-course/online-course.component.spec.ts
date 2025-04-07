import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCourseComponent } from './online-course.component';

describe('OnlineCourseComponent', () => {
  let component: OnlineCourseComponent;
  let fixture: ComponentFixture<OnlineCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
