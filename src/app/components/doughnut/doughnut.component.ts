import { Component, OnInit, Input } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {

  @Input() labels: Label[];
  @Input() data: MultiDataSet[];
  @Input() legend: string;

  constructor() { }

  ngOnInit() {
  }

}
