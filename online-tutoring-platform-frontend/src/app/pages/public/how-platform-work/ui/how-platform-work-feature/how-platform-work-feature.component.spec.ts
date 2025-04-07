import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowPlatformWorkFeatureComponent } from './how-platform-work-feature.component';

describe('HowPlatformWorkFeatureComponent', () => {
  let component: HowPlatformWorkFeatureComponent;
  let fixture: ComponentFixture<HowPlatformWorkFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowPlatformWorkFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowPlatformWorkFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
