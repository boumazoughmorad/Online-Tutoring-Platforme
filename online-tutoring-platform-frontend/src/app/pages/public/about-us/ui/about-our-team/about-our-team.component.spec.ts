import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOurTeamComponent } from './about-our-team.component';

describe('AboutOurTeamComponent', () => {
  let component: AboutOurTeamComponent;
  let fixture: ComponentFixture<AboutOurTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutOurTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutOurTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
