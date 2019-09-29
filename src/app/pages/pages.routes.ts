import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicsComponent } from './graphics/graphics.component';


const routes: Routes = [
  { path: '', component: PagesComponent,
  children:  [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'progress', component: ProgressComponent},
    { path: 'graphics', component: GraphicsComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRouteModule {}
