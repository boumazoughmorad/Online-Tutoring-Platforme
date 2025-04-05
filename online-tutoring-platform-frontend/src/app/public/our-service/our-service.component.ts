import {Component, OnInit, signal} from '@angular/core';
import {Category} from './model/our-service.service';
import {Categories} from './model/data';
import {ItemOurServiceComponent} from './ui/item-our-service/item-our-service.component';

@Component({
  selector: 'app-our-service',
  imports: [ItemOurServiceComponent],
  templateUrl: './our-service.component.html',
  styleUrl: './our-service.component.css'
})
export class OurServiceComponent implements OnInit{
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
