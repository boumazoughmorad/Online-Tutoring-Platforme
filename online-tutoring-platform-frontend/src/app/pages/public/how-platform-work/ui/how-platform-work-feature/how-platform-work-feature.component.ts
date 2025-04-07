import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Feature } from '../../model/how-platform-work.model';
import { features_howPlatformWork } from '../../model/data';

@Component({
  selector: 'app-how-platform-work-feature',
  imports: [NgFor],
  templateUrl: './how-platform-work-feature.component.html',
  styleUrl: './how-platform-work-feature.component.css'
})
export class HowPlatformWorkFeatureComponent implements OnInit{
  features : Feature[] = []
  ngOnInit(): void {
    this.features = features_howPlatformWork
  }

}
