import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWorkspaceUserComponent } from './header-workspace-user.component';

describe('HeaderWorkspaceUserComponent', () => {
  let component: HeaderWorkspaceUserComponent;
  let fixture: ComponentFixture<HeaderWorkspaceUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderWorkspaceUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderWorkspaceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
