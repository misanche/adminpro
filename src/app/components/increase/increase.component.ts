import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increase',
  templateUrl: './increase.component.html',
  styleUrls: ['./increase.component.css']
})
export class IncreaseComponent implements OnInit {

  @Input() legend = 'Leyenda';
  @Input() progressValue = 50;

  @ViewChild('progress', {static: false}) progressInput: ElementRef;

  @Output() valueChange: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log('Legend Value', this.legend);
    console.log('progress Value', this.progressValue);
  }

  ngOnInit() {
  }

  increaseValue() {
    if (this.progressValue < 100) {
      this.progressValue = this.progressValue + 5;
      this.valueChange.emit(this.progressValue);
    }
  }

  decreaseValue() {

    if (this.progressValue > 0) {
      this.progressValue = this.progressValue - 5;
      this.valueChange.emit(this.progressValue);
    }
  }

  setValue(event: number) {
    console.log(event);
    if ( event >= 100 ) {
      this.progressValue = 100;
    } else if ( event <= 0 ) {
      this.progressValue = 0;
    } else {
      this.progressValue = event;
    }
    this.progressInput.nativeElement.value = this.progressValue;
    this.valueChange.emit(this.progressValue);
  }

}
