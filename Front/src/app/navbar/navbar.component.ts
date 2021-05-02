import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../shared/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private themeService: ThemeService, private router: Router) { }

  ngOnInit(): void { }

  changeTheme() {
    this.themeService.toggleTheme()
  }

  themeIsDark() : Boolean {
    return this.themeService.isDark
  }

  isPersonRoute() : Boolean {
    return this.router.url.indexOf('person') > 0
  }

}
