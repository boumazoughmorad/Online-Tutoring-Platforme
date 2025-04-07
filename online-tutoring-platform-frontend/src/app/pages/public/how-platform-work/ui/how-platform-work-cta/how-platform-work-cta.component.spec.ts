import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowPlatformWorkCtaComponent } from './how-platform-work-cta.component';

describe('HowPlatformWorkCtaComponent', () => {
  let component: HowPlatformWorkCtaComponent;
  let fixture: ComponentFixture<HowPlatformWorkCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowPlatformWorkCtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowPlatformWorkCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
