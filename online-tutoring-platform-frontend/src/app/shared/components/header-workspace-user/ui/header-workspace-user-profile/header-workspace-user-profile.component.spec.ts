import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWorkspaceUserProfileComponent } from './header-workspace-user-profile.component';

describe('HeaderWorkspaceUserProfileComponent', () => {
  let component: HeaderWorkspaceUserProfileComponent;
  let fixture: ComponentFixture<HeaderWorkspaceUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderWorkspaceUserProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderWorkspaceUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
