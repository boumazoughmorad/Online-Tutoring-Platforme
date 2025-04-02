import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PublicHeaderComponent} from '../../shared/public-header/public-header.component';

@Component({
  selector: 'app-public-home',
  imports: [RouterOutlet, PublicHeaderComponent],
  standalone:true,
  templateUrl: './public-home.component.html',
  styleUrl: './public-home.component.css'
})
export class PublicHomeComponent {

}
