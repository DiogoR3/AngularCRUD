import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() { }

  ngOnInit() {

  }

  changeTheme(isDark: Boolean) {
    let theme = document.getElementById('themeAsset') as HTMLLinkElement
    theme.href = isDark ? "assets/purple-green.css" : "assets/deeppurple-amber.css"
  }
}
