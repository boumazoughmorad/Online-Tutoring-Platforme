import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowPlatformWorkTestimonialComponent } from './how-platform-work-testimonial.component';

describe('HowPlatformWorkTestimonialComponent', () => {
  let component: HowPlatformWorkTestimonialComponent;
  let fixture: ComponentFixture<HowPlatformWorkTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowPlatformWorkTestimonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowPlatformWorkTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
