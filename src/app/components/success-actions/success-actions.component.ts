import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SuccessActions } from './interface/success-actions.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-success-actions',
  standalone: true,
  imports: [MatIconModule, CommonModule, FormsModule],
  templateUrl: './success-actions.component.html',
  styleUrl: './success-actions.component.scss',
})
export class SuccessActionsComponent {
  // Data for populating select options (simplified)
  attributes = ['Name', 'Age', 'Country', 'Department'];

  successActions: SuccessActions[] = [{ attribute: '', value: '' }];

  addAction() {
    this.successActions.push({ attribute: '', value: '' });
  }

  removeAction(index: number) {
    if (this.successActions.length > 1) {
      this.successActions.splice(index, 1);
    }
  }
}
