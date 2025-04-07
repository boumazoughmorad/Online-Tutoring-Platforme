import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowPlatformWorkHeaderComponent } from './how-platform-work-header.component';

describe('HowPlatformWorkHeaderComponent', () => {
  let component: HowPlatformWorkHeaderComponent;
  let fixture: ComponentFixture<HowPlatformWorkHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowPlatformWorkHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowPlatformWorkHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
