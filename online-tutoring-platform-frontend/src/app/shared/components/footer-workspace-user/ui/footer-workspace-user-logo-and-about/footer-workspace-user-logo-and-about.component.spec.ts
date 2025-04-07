import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterWorkspaceUserLogoAndAboutComponent } from './footer-workspace-user-logo-and-about.component';

describe('FooterWorkspaceUserLogoAndAboutComponent', () => {
  let component: FooterWorkspaceUserLogoAndAboutComponent;
  let fixture: ComponentFixture<FooterWorkspaceUserLogoAndAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterWorkspaceUserLogoAndAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterWorkspaceUserLogoAndAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
