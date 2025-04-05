import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOurServiceComponent } from './item-our-service.component';

describe('ItemOurServiceComponent', () => {
  let component: ItemOurServiceComponent;
  let fixture: ComponentFixture<ItemOurServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemOurServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemOurServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
