import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWorkspaceUserMessagesComponent } from './header-workspace-user-messages.component';

describe('HeaderWorkspaceUserMessagesComponent', () => {
  let component: HeaderWorkspaceUserMessagesComponent;
  let fixture: ComponentFixture<HeaderWorkspaceUserMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderWorkspaceUserMessagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderWorkspaceUserMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
