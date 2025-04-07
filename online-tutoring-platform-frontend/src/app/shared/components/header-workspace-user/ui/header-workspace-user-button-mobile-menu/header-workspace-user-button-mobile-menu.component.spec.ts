import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWorkspaceUserButtonMobileMenuComponent } from './header-workspace-user-button-mobile-menu.component';

describe('HeaderWorkspaceUserButtonMobileMenuComponent', () => {
  let component: HeaderWorkspaceUserButtonMobileMenuComponent;
  let fixture: ComponentFixture<HeaderWorkspaceUserButtonMobileMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderWorkspaceUserButtonMobileMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderWorkspaceUserButtonMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
