import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDark: Boolean = false

  constructor() { }

  toggleTheme(): void {
    this.isDark = !this.isDark
    let theme = document.getElementById('themeAsset') as HTMLLinkElement
    theme.href = this.isDark ? "assets/purple-green.css" : "assets/deeppurple-amber.css"
  }

  setTheme(toDark: boolean) {
    if (toDark != this.isDark)
      this.toggleTheme()
  }

}
