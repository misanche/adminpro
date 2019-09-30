import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { GraphicsComponent } from './graphics/graphics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRouteModule } from './pages.routes';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    PagesComponent,
    GraphicsComponent,
    DashboardComponent,
    ProgressComponent
  ],
  exports: [
    PagesComponent,
    GraphicsComponent,
    DashboardComponent,
    ProgressComponent
  ],
  imports: [
    SharedModule,
    PagesRouteModule,
    ComponentsModule,
    ChartsModule
  ]

})

export class PagesModule { }
