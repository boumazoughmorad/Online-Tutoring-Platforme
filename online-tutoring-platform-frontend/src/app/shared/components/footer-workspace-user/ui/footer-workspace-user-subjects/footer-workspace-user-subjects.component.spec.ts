import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterWorkspaceUserSubjectsComponent } from './footer-workspace-user-subjects.component';

describe('FooterWorkspaceUserSubjectsComponent', () => {
  let component: FooterWorkspaceUserSubjectsComponent;
  let fixture: ComponentFixture<FooterWorkspaceUserSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterWorkspaceUserSubjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterWorkspaceUserSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
