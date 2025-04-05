import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowPlatformWorkComponent } from './how-platform-work.component';

describe('HowPlatformWorkComponent', () => {
  let component: HowPlatformWorkComponent;
  let fixture: ComponentFixture<HowPlatformWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowPlatformWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowPlatformWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
