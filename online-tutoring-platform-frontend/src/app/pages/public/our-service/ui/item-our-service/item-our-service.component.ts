import { Component,Input  } from '@angular/core';
import {Category} from '../../model/our-service.service';


import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../../../shared/components/icon/icon.component';
@Component({
  selector: 'app-item-our-service',
  imports: [CommonModule,
            IconComponent,
            
       
  ],

  templateUrl: './item-our-service.component.html',
  styleUrl: './item-our-service.component.css'
})
export class ItemOurServiceComponent {
  @Input({ required: true }) category!: Category;
  @Input() selectedCategoryId!: number;
}
