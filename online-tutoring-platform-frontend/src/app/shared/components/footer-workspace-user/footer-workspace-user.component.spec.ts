import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterWorkspaceUserComponent } from './footer-workspace-user.component';

describe('FooterWorkspaceUserComponent', () => {
  let component: FooterWorkspaceUserComponent;
  let fixture: ComponentFixture<FooterWorkspaceUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterWorkspaceUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterWorkspaceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
