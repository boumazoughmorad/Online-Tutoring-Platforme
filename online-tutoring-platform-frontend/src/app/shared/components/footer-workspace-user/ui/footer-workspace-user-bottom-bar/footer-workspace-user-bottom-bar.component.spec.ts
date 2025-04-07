import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterWorkspaceUserBottomBarComponent } from './footer-workspace-user-bottom-bar.component';

describe('FooterWorkspaceUserBottomBarComponent', () => {
  let component: FooterWorkspaceUserBottomBarComponent;
  let fixture: ComponentFixture<FooterWorkspaceUserBottomBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterWorkspaceUserBottomBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterWorkspaceUserBottomBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
