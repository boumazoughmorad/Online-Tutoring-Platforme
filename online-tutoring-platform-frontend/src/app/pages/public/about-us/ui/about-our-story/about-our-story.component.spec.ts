import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOurStoryComponent } from './about-our-story.component';

describe('AboutOurStoryComponent', () => {
  let component: AboutOurStoryComponent;
  let fixture: ComponentFixture<AboutOurStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutOurStoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutOurStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
