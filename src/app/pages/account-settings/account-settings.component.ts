import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  color: string;
  constructor(private settingsService: SettingsService) {
    this.color = settingsService.settings.theme;
  }

  ngOnInit() {
  }

  changeColor(color: string) {
    this.color = color;
    this.settingsService.applySettings(color);
  }

}
