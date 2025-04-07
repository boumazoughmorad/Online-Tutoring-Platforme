import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantagePlatformComponent } from './advantage-platform.component';

describe('AdvantagePlatformComponent', () => {
  let component: AdvantagePlatformComponent;
  let fixture: ComponentFixture<AdvantagePlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvantagePlatformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvantagePlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
