import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWorkspaceUserLogoComponent } from './header-workspace-user-logo.component';

describe('HeaderWorkspaceUserLogoComponent', () => {
  let component: HeaderWorkspaceUserLogoComponent;
  let fixture: ComponentFixture<HeaderWorkspaceUserLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderWorkspaceUserLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderWorkspaceUserLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
