import {Component, OnInit} from '@angular/core';
import {subtitle_howPlatformWork, title_howPlatformWork} from '../../model/data';

@Component({
  selector: 'app-how-platform-work-header',
  imports: [],
  templateUrl: './how-platform-work-header.component.html',
  styleUrl: './how-platform-work-header.component.css'
})
export class HowPlatformWorkHeaderComponent implements  OnInit{
  title :string =""
  subtitle : string =""
    ngOnInit(): void {
        this.title = title_howPlatformWork
      this.subtitle = subtitle_howPlatformWork
    }

}
