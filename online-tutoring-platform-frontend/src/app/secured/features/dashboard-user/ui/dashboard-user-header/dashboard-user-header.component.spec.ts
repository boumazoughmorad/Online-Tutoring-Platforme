import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserHeaderComponent } from './dashboard-user-header.component';

describe('DashboardUserHeaderComponent', () => {
  let component: DashboardUserHeaderComponent;
  let fixture: ComponentFixture<DashboardUserHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardUserHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardUserHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
