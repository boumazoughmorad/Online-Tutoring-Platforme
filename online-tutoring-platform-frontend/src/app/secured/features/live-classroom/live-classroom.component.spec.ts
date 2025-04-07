import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveClassroomComponent } from './live-classroom.component';

describe('LiveClassroomComponent', () => {
  let component: LiveClassroomComponent;
  let fixture: ComponentFixture<LiveClassroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveClassroomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
