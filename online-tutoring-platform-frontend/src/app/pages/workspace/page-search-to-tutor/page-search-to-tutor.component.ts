import { Component } from '@angular/core';
import { SearchToTutorHeroSectionComponent } from "./components/hero-section/hero-section.component";
import { SearchToTutorSortingComponent } from "./components/sorting-tutor/sorting-tutor.component";
import { ListTutorFilterSidebarComponent } from "./components/filter-tutors/filter-tutors.component";
import { ListTutorAccueilComponent } from "../../../domains/tutor/components/list-tutor-accueil/list-tutor-accueil.component";
import { DisplayVedeoComponent } from "./components/display-vedeo/display-vedeo.component";





@Component({
  selector: 'app-page-search-to-tutor',
  imports: [SearchToTutorHeroSectionComponent, SearchToTutorSortingComponent, ListTutorFilterSidebarComponent, ListTutorAccueilComponent, DisplayVedeoComponent],
  templateUrl: './page-search-to-tutor.component.html'
})
export class SearchToTutorComponent {
 

}
