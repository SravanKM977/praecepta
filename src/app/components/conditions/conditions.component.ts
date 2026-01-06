import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-conditions',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './conditions.component.html',
  styleUrl: './conditions.component.scss',
})
export class ConditionsComponent implements OnInit {
  @Input() ruleForm!: FormGroup;

  // Static data to populate the dropdowns (simulating API response)
  attributes: string[] = [
    'User Role',
    'Product Category',
    'Order Total',
    'Geographic Region',
  ];
  operators: string[] = [
    'Equals',
    'Does Not Equal',
    'Greater Than',
    'Less Than',
    'Contains',
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Initialize the main form group
    this.ruleForm = this.fb.group({
      // --- New Form Array for Conditions/Predicates ---
    });
  }

  /** Getter for easy access to the 'conditions' FormArray */
  get conditions(): FormArray {
    return this.ruleForm.get('conditions') as FormArray;
  }

  /** Factory method to create a new FormGroup for a single condition */
  createCondition(): FormGroup {
    return this.fb.group({
      attribute: ['', Validators.required],
      operator: ['', Validators.required],
      value: ['', Validators.required],
    });
  }

  /** Adds a new condition FormGroup to the FormArray */
  addCondition(): void {
    this.conditions.push(this.createCondition());
  }

  /** Removes a condition FormGroup from the FormArray by index */
  removeCondition(index: number): void {
    if (this.conditions.length > 1) {
      // Ensure at least one condition remains
      this.conditions.removeAt(index);
    } else {
      // Optional: Clear the only remaining row instead of removing it
      this.conditions.at(0).reset();
    }
  }

  get f() {
    return this.ruleForm.controls;
  }
}
