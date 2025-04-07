import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOurValuesComponent } from './about-our-values.component';

describe('AboutOurValuesComponent', () => {
  let component: AboutOurValuesComponent;
  let fixture: ComponentFixture<AboutOurValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutOurValuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutOurValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
