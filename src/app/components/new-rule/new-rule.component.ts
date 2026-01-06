import { Component } from '@angular/core';
import { RuleInfoComponent } from '../rule-info/rule-info.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { ConditionsComponent } from '../conditions/conditions.component';
import { RuleBuilderComponent } from '../rule-builder/rule-builder.component';
import { AccessButtonsComponent } from '../access-buttons/access-buttons.component';

@Component({
  selector: 'app-new-rule',
  standalone: true,
  imports: [
    RuleInfoComponent,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    CommonModule,
    ConditionsComponent,
    RuleBuilderComponent,
    AccessButtonsComponent,
  ],
  templateUrl: './new-rule.component.html',
  styleUrl: './new-rule.component.scss',
})
export class NewRuleComponent {
  ruleForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Initialize the form group with FormControls and validators
    this.ruleForm = this.fb.group({
      ruleName: ['', [Validators.required, Validators.maxLength(50)]],
      rulePriority: [
        '',
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
      description: ['', Validators.maxLength(250)],
      conditions: this.fb.array([this.createCondition()]),
    });

    // this.ruleForm.valueChanges.subscribe((value) => {
    //   console.log('Form Value:', value);
    //   // console.log('Form Valid:', this.ruleForm.valid);
    // });
  }

  get f() {
    return this.ruleForm.controls;
  }

  createCondition(): FormGroup {
    return this.fb.group({
      attribute: ['', Validators.required],
      operator: ['', Validators.required],
      value: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.ruleForm.valid) {
      console.log('Form Submitted!', this.ruleForm.value);
      // Here you would typically send this data to a service
      // this.myRuleService.saveRule(this.ruleForm.value).subscribe(...);
      this.ruleForm.reset(); // Optionally reset the form after submission
    } else {
      console.log('Form is invalid. Please check fields.');
      // Mark all fields as touched to display validation messages
      this.ruleForm.markAllAsTouched();
    }
  }

  loadRuleData(rule: { name: string; priority: number; desc: string }): void {
    this.ruleForm.patchValue({
      ruleName: rule.name,
      rulePriority: rule.priority,
      description: rule.desc,
    });
  }

  onClear(event: boolean): void {
    this.ruleForm.reset(event);
  }

  downloadRuleJSON() {
    let formValues = this.ruleForm.value;

    let json = JSON.stringify(formValues, null, 2);
    let blob = new Blob([json], { type: 'application/json' });
    let url = window.URL.createObjectURL(blob);

    let fileName = this.ruleForm.get('ruleName')?.value?.trim() || 'form-data';

    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.json`;
    link.click();

    window.URL.revokeObjectURL(url);
  }

  runRule() {
    console.log('Run new rule');
  }

  saveRule() {
    console.log('Save new rule');
  }
}
