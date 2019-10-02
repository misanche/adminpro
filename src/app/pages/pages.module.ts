import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { GraphicsComponent } from './graphics/graphics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRouteModule } from './pages.routes';
import { ComponentsModule } from '../components/components.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ServiceModule } from '../services/service.module';


@NgModule({
  declarations: [
    PagesComponent,
    GraphicsComponent,
    DashboardComponent,
    ProgressComponent,
    AccountSettingsComponent
  ],
  exports: [
    PagesComponent,
    GraphicsComponent,
    DashboardComponent,
    ProgressComponent,
    AccountSettingsComponent
  ],
  imports: [
    SharedModule,
    PagesRouteModule,
    ComponentsModule,
    ChartsModule,
    CommonModule,
    ServiceModule
  ]

})

export class PagesModule { }
