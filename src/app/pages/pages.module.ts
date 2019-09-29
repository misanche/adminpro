import { NgModule } from '@angular/core';
import { GraphicsComponent } from './graphics/graphics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRouteModule } from './pages.routes';

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
    PagesRouteModule
  ]

})

export class PagesModule { }
