import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMilestonesComponent } from './about-milestones.component';

describe('AboutMilestonesComponent', () => {
  let component: AboutMilestonesComponent;
  let fixture: ComponentFixture<AboutMilestonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMilestonesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMilestonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
