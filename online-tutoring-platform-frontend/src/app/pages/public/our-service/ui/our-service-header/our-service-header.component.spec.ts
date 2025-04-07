import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServiceHeaderComponent } from './our-service-header.component';

describe('OurServiceHeaderComponent', () => {
  let component: OurServiceHeaderComponent;
  let fixture: ComponentFixture<OurServiceHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurServiceHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurServiceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
