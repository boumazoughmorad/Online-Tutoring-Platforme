import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterWorkspaceUserNewsletterComponent } from './footer-workspace-user-newsletter.component';

describe('FooterWorkspaceUserNewsletterComponent', () => {
  let component: FooterWorkspaceUserNewsletterComponent;
  let fixture: ComponentFixture<FooterWorkspaceUserNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterWorkspaceUserNewsletterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterWorkspaceUserNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
