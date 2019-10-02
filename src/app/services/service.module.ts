import { NgModule } from '@angular/core';
import { SettingsService, SharedService, SidebarService } from './service.index';

@NgModule({
  declarations: [],
  providers: [
    SettingsService,
    SharedService,
    SidebarService
  ],
  exports: [
  ]
})
export class ServiceModule { }
