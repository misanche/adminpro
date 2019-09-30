import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { IncreaseComponent } from './increase/increase.component';
import { DoughnutComponent } from './doughnut/doughnut.component';

@NgModule({
  declarations: [ IncreaseComponent, DoughnutComponent ],
  imports: [ FormsModule, ChartsModule, CommonModule, BrowserModule],
  exports: [ IncreaseComponent, DoughnutComponent ],
  providers: [],
})
export class ComponentsModule {}
