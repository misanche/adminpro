import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
  { path: '', component: PagesComponent,
  children:  [
    { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard', description: 'Dashboard Page'}},
    { path: 'progress', component: ProgressComponent, data: { title: 'Progress Bar', description: 'Progress Bar Page'}},
    { path: 'graphics', component: GraphicsComponent, data: { title: 'Graphics', description: 'Graphics Page'}},
    { path: 'promises', component: PromisesComponent, data: { title: 'Promises', description: 'Promises Page'}},
    { path: 'account-settings', component: AccountSettingsComponent,
    data: { title: 'Account Settings', description: 'Account Settings Page'} },
    { path: 'rxjs', component: RxjsComponent, data: { title: 'RxJS', description: 'RxJS Page'}},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRouteModule {}
