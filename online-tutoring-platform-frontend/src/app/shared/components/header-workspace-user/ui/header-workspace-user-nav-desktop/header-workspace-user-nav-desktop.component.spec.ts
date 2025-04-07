import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWorkspaceUserNavDesktopComponent } from './header-workspace-user-nav-desktop.component';

describe('HeaderWorkspaceUserNavDesktopComponent', () => {
  let component: HeaderWorkspaceUserNavDesktopComponent;
  let fixture: ComponentFixture<HeaderWorkspaceUserNavDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderWorkspaceUserNavDesktopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderWorkspaceUserNavDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
