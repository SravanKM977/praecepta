import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatIconModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {
  // 1. Initial State: 'ADD' to show the default button
  selectedCondition: 'ADD' | 'AND' | 'OR' = 'ADD';

  // 2. Options for the menu
  menuOptions: ('AND' | 'OR')[] = ['AND', 'OR'];

  @Output() decideCondition = new EventEmitter();

  // 3. Logic to handle menu item click
  onSelectOption(option: 'AND' | 'OR'): void {
    // This updates the button text to the selected value
    this.selectedCondition = option;
  }

  // Helper to show the button's content
  get buttonText(): string {
    if (this.selectedCondition === 'ADD') {
      return '+ADD';
    }
    return this.selectedCondition;
  }
}
