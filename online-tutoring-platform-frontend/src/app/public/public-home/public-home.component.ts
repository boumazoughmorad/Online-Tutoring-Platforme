import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PublicHeaderComponent} from '../../shared/public-header/public-header.component';
import {PublicFooterComponent} from '../../shared/public-footer/public-footer.component';

@Component({
  selector: 'app-public-home',
  imports: [RouterOutlet, PublicHeaderComponent,PublicFooterComponent],
  standalone:true,
  templateUrl: './public-home.component.html',
  styleUrl: './public-home.component.css'
})
export class PublicHomeComponent {

}
