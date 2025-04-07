import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowPlatformWorkStepsComponent } from './how-platform-work-steps.component';

describe('HowPlatformWorkStepsComponent', () => {
  let component: HowPlatformWorkStepsComponent;
  let fixture: ComponentFixture<HowPlatformWorkStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowPlatformWorkStepsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowPlatformWorkStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
