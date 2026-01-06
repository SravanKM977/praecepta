import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { MenuItems } from './interface/navbar.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatSidenavModule, MatIconModule, MatListModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menuItems: MenuItems[] = [
    {
      label: 'Rule Space',
      icon: 'assets/images/ruleSpace.svg',
      active: true,
      path: 'ruleSpace',
    },
    {
      label: 'New Rule',
      icon: 'assets/images/newRule.svg',
      active: false,
      path: 'newRule',
    },
    {
      label: 'Sidecar',
      icon: 'assets/images/sidecar.svg',
      active: false,
      path: 'sidecar',
    },
  ];

  constructor(private router: Router) {}

  onClickNavItem(route: string) {
    this.router.navigate([route]);
  }
}
