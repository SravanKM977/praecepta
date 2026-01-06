import { Component } from '@angular/core';
import { SuccessActionsComponent } from '../success-actions/success-actions.component';
import { FailureActionsComponent } from '../failure-actions/failure-actions.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DotsActionsComponent } from '../dots-actions/dots-actions.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import {
  ConditionPredicate,
  ConditionSet,
} from './interface/conditions-predicates.interface';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-rule-builder',
  standalone: true,
  imports: [
    SuccessActionsComponent,
    FailureActionsComponent,
    MatIconModule,
    MatMenuModule,
    DotsActionsComponent,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    FormsModule,
    MatTooltipModule,
    AddComponent,
  ],
  templateUrl: './rule-builder.component.html',
  styleUrl: './rule-builder.component.scss',
})
export class RuleBuilderComponent {
  conditionIdCounter = 1;

  conditionSet = [
    {
      conditionsPredicates: [],
      successActions: [],
      failureActions: [],
    },
  ];

  // Data for populating select options (simplified)
  attributes = ['Name', 'Age', 'Country', 'Department'];

  operators = ['=', '!=', '>', '<', '>=', '<='];

  conditionsPredicates: ConditionPredicate[] = [
    { attribute: '', operator: '', value: '' },
  ];

  addConditionSet() {
    this.conditionSet.push({
      conditionsPredicates: [],
      successActions: [],
      failureActions: [],
    });
  }

  removeConditionSet(index: number) {
    if (this.conditionSet.length > 1) {
      this.conditionSet.splice(index, 1);
    }
  }

  addConditionPredicate() {
    this.conditionsPredicates.push({ attribute: '', operator: '', value: '' });
  }

  removeConditionPredicate(index: number) {
    if (this.conditionsPredicates.length > 1) {
      this.conditionsPredicates.splice(index, 1);
    }
  }
}
