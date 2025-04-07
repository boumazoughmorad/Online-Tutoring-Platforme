import { Component, OnInit, signal } from '@angular/core';
import { ItemOurServiceComponent } from '../item-our-service/item-our-service.component';
import { Category } from '../../model/our-service.service';
import { Categories } from '../../model/data';

@Component({
  selector: 'app-our-service-list',
  imports: [ItemOurServiceComponent,],
  templateUrl: './our-service-list.component.html',
  styleUrl: './our-service-list.component.css'
})
export class OurServiceListComponent implements OnInit{
  categories : Category[] = []
  selectedCategoryId = signal<number>(-1);
  ngOnInit(): void {
      this.categories = Categories
  }

  changeSelectCategories(id: number) {
    if(this.selectedCategoryId() === id) {
      this.selectedCategoryId.set(-1)
    }
    else{
      this.selectedCategoryId.set(id)
    }
  }
}
