import { Component } from '@angular/core';
import { AddComponent } from '../add/add.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SuccessActions } from '../success-actions/interface/success-actions.interface';

@Component({
  selector: 'app-failure-actions',
  standalone: true,
  imports: [AddComponent, MatIconModule, CommonModule],
  templateUrl: './failure-actions.component.html',
  styleUrl: './failure-actions.component.scss',
})
export class FailureActionsComponent {
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

  handleSelection(event: string) {
    if (event.toUpperCase() === 'AND') {
      console.log('AND');
    } else if (event.toUpperCase() === 'OR') {
      console.log('OR');
    } else {
      return;
    }
  }
}
