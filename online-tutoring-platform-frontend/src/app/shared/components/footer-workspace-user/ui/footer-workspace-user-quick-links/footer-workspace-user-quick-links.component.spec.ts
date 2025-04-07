import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterWorkspaceUserQuickLinksComponent } from './footer-workspace-user-quick-links.component';

describe('FooterWorkspaceUserQuickLinksComponent', () => {
  let component: FooterWorkspaceUserQuickLinksComponent;
  let fixture: ComponentFixture<FooterWorkspaceUserQuickLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterWorkspaceUserQuickLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterWorkspaceUserQuickLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
