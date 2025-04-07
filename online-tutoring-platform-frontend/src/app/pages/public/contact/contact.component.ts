// contact.component.ts

import { Component } from '@angular/core';
import { ContactHeaderComponent } from './ui/contact-header/contact-header.component';
import { ContactInfoComponent } from './ui/contact-info/contact-info.component';
import { ContactFormComponent } from './ui/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports:[ContactHeaderComponent,ContactInfoComponent,ContactFormComponent]
})
export class ContactComponent {

}
