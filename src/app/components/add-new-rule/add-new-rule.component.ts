import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-rule',
  standalone: true,
  imports: [
    MatDialogActions,
    MatIconModule,
    CommonModule,
    MatDialogContent,
    MatRadioModule,
    FormsModule,
  ],
  templateUrl: './add-new-rule.component.html',
  styleUrl: './add-new-rule.component.scss',
})
export class AddNewRuleComponent {
  // Binds to the radio buttons
  // ruleOption = 'manually';

  mode = 'manual';
  fileName = '';
  fileContent: any = null;

  // 1. Inject MatDialogRef to close the dialog
  constructor(
    public dialogRef: MatDialogRef<AddNewRuleComponent>,
    private router: Router
  ) {}

  // openFileSelector() {
  //   // Logic to open a file dialog
  //   console.log('File selector opened');
  // }

  // onCancel(): void {
  //   // Pass 'false' or null to indicate cancellation
  //   this.dialogRef.close(false);
  // }

  // onAdd(): void {
  //   // Pass data back (e.g., the selected option or imported file data)
  //   this.dialogRef.close({ action: 'add', option: this.ruleOption });
  // }

  // isFormValid(): boolean {
  //   // Simple validation: The form is always valid if an option is selected.
  //   return !!this.ruleOption;
  // }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  handleDrop(event: DragEvent) {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];
    if (file) this.readFile(file);
  }

  handleFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) this.readFile(file);
  }

  readFile(file: File) {
    this.fileName = file.name;
    const reader = new FileReader();

    reader.onload = () => {
      try {
        this.fileContent = JSON.parse(reader.result as string);
      } catch (e) {
        alert('Invalid JSON file');
      }
    };

    reader.readAsText(file);
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    if (this.mode === 'import' && this.fileContent) {
      this.dialogRef.close(this.fileContent); // send JSON to parent
    } else {
      this.dialogRef.close(null);
      this.router.navigate(['/new-rule']);
    }
  }
}
