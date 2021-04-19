import { Component } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private themeService: ThemeService) { }

  ngOnInit() {

  }

  changeTheme(isDark: Boolean) {
    if (isDark)
      this.themeService.setDarkTheme();
    else
      this.themeService.setLightTheme();
  }
}
