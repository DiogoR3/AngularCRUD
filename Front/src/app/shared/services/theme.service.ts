import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  private active: Theme = light;
  private availableThemes: Theme[] = [light, dark];

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  isDarkTheme(): boolean {
    return this.active.name === dark.name;
  }

  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  setLightTheme(): void {
    this.setActiveTheme(light);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    if(!theme.properties)
      document.documentElement.removeAttribute('style');

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}

export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: "light",
  properties: null
};

export const dark: Theme = {
  name: "dark",
  properties: {
    "--background-default": "#303030",
    "--background-secondary": "#41474D",

    "--primary-default": "#5DFDCB",
    "--primary-dark": "#24B286",
    "--primary-light": "#B2FFE7",

    "--error-default": "#EF3E36",
    "--error-dark": "#800600",
    "--error-light": "#FFCECC",

    "--color": "#fff",

    "--background-tertiary-shadow": "0 1px 3px 0 rgba(8, 9, 10, 0.5)"
  }
};