import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServiceInfoComponent } from './our-service-info.component';

describe('OurServiceInfoComponent', () => {
  let component: OurServiceInfoComponent;
  let fixture: ComponentFixture<OurServiceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurServiceInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurServiceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
