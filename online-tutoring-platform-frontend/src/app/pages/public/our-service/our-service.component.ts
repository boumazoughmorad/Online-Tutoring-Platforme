import {Component, OnInit, signal} from '@angular/core';
import {Category} from './model/our-service.service';
import {Categories} from './model/data';
import {ItemOurServiceComponent} from './ui/item-our-service/item-our-service.component';
import { OurServiceHeaderComponent } from './ui/our-service-header/our-service-header.component';
import { OurServiceInfoComponent } from './ui/our-service-info/our-service-info.component';
import { OurServiceListComponent } from './ui/our-service-list/our-service-list.component';

@Component({
  selector: 'app-our-service',
  imports: [
          OurServiceHeaderComponent,
          OurServiceInfoComponent,
          OurServiceListComponent
  ],
  templateUrl: './our-service.component.html',
  styleUrl: './our-service.component.css'
})
export class OurServiceComponent {

}
