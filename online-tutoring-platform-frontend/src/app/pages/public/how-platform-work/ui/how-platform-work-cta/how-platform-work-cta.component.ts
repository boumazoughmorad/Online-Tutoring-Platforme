import { Component, OnInit } from '@angular/core';
import { cta_howPlatformWork } from '../../model/data';

@Component({
  selector: 'app-how-platform-work-cta',
  imports: [],
  templateUrl: './how-platform-work-cta.component.html',
  styleUrl: './how-platform-work-cta.component.css'
})
export class HowPlatformWorkCtaComponent implements OnInit{
  cta !: { title: string; subtitle: string; buttonText: string; }
  ngOnInit(): void {
    this.cta = cta_howPlatformWork
  }

}
