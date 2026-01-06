import { Component } from '@angular/core';
import { TopNavbarComponent } from '../top-navbar/top-navbar.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-rule-info',
  standalone: true,
  imports: [TopNavbarComponent, MatCardModule],
  templateUrl: './rule-info.component.html',
  styleUrl: './rule-info.component.scss',
})
export class RuleInfoComponent {}
