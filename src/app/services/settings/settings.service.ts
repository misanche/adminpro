import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
    themeUrl: 'assets/css/colors/default-dark.css',
    theme: 'default-dark'
  };

  constructor(@Inject(DOCUMENT) private document) {
    this.loadSettings();
  }

  saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  loadSettings() {
    if (localStorage.getItem('settings')) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
      this.applySettings(this.settings.theme);
    }
  }

  applySettings(color: string) {
    const url = `assets/css/colors/${color}.css`;
    this.document.getElementById('theme').setAttribute('href', url);

    this.settings.theme = color;
    this.settings.themeUrl = url;
    this.saveSettings();
  }
}

interface Settings {
  themeUrl: string;
  theme: string;
}
