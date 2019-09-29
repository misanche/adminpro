import { Routes, RouterModule } from '@angular/router';


import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';

const APP_ROUTES: Routes = [
  { path: '', component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'progress', component: ProgressComponent},
      { path: 'graphics', component: GraphicsComponent},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  ]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', component: PagenotfoundComponent},
];

export const AppRoutes = RouterModule.forRoot(APP_ROUTES, { useHash: true });
