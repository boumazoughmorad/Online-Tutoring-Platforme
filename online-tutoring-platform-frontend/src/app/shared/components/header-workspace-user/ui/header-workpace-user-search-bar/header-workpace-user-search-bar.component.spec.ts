import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWorkpaceUserSearchBarComponent } from './header-workpace-user-search-bar.component';

describe('HeaderWorkpaceUserSearchBarComponent', () => {
  let component: HeaderWorkpaceUserSearchBarComponent;
  let fixture: ComponentFixture<HeaderWorkpaceUserSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderWorkpaceUserSearchBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderWorkpaceUserSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
