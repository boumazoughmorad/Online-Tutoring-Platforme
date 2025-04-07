import {Component, OnInit} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import {Step} from '../../model/how-platform-work.model';
import {steps_howPlatformWork} from '../../model/data';

@Component({
  selector: 'app-how-platform-work-steps',
  imports: [NgFor,NgIf],
  templateUrl: './how-platform-work-steps.component.html',
  styleUrl: './how-platform-work-steps.component.css'
})
export class HowPlatformWorkStepsComponent implements OnInit{
     steps:Step[] = []
    ngOnInit(): void {
        this.steps = steps_howPlatformWork
    }

}
