import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterWorkspaceUserSupportComponent } from './footer-workspace-user-support.component';

describe('FooterWorkspaceUserSupportComponent', () => {
  let component: FooterWorkspaceUserSupportComponent;
  let fixture: ComponentFixture<FooterWorkspaceUserSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterWorkspaceUserSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterWorkspaceUserSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
