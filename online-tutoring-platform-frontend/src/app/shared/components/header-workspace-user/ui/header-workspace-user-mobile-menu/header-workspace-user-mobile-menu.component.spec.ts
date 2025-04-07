import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWorkspaceUserMobileMenuComponent } from './header-workspace-user-mobile-menu.component';

describe('HeaderWorkspaceUserMobileMenuComponent', () => {
  let component: HeaderWorkspaceUserMobileMenuComponent;
  let fixture: ComponentFixture<HeaderWorkspaceUserMobileMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderWorkspaceUserMobileMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderWorkspaceUserMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
