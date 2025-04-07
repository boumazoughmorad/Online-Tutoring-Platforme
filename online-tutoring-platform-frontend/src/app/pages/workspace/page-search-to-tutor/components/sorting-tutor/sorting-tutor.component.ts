import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { SortOption } from '../../../../../domains/tutor/model/tutor.model';

@Component({
  selector: 'app-sorting-tutor',
  imports: [NgFor,FormsModule],
  templateUrl: './sorting-tutor.component.html',

})
export class SearchToTutorSortingComponent implements OnInit{
  sortOptions: SortOption[] = []
  selectedSort!: string
  ngOnInit(): void {

      this.loadSortOptions()
      this.selectedSort = this.sortOptions[0].uuid;
  }

  changeSelectSort(): void {
    const selectedOption = this.sortOptions.find(option => option.uuid === this.selectedSort);
    if (selectedOption) {
      console.log('Sort method selected:', selectedOption.sortMethode);
      // Tu peux ici appliquer la logique pour trier les tuteurs en fonction de `selectedOption.sortMethode`
    }
  }
  loadSortOptions(){
    this.sortOptions = [ { uuid: '1', sortMethode: 'Recommended' },
      { uuid: '2', sortMethode: 'Price: Low to High' },
      { uuid: '3', sortMethode: 'Price: High to Low' },
      { uuid: '4', sortMethode: 'Rating' }
    ];
  }
   
  
}
