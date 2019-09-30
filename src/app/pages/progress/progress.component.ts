import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progressValue = 50;
  progressValue2 = 75;

  constructor() { }

  ngOnInit() {
  }

  updateProgress(event: number, progress: number) {
    console.log('Fired?');
    if (progress === 1) {
      this.progressValue = event;
    } else {
      this.progressValue2 = event;
    }
  }
}
