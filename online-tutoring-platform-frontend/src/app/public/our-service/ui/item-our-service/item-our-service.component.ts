import { Component,Input  } from '@angular/core';
import {Category} from '../../model/our-service.service';

import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-item-our-service',
  imports: [CommonModule],

  templateUrl: './item-our-service.component.html',
  styleUrl: './item-our-service.component.css'
})
export class ItemOurServiceComponent {
  @Input({ required: true }) category!: Category;
  @Input() selectedCategoryId!: number;
}
