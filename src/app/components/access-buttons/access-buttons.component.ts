import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-access-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './access-buttons.component.html',
  styleUrl: './access-buttons.component.scss',
})
export class AccessButtonsComponent {
  @Output() clearForm = new EventEmitter<any>();
  @Output() downloadForm = new EventEmitter<any>();

  cleanForm(): any {
    this.clearForm.emit(true);
  }

  downloadContent(): any {
    console.log('download');
    this.downloadForm.emit(true);
  }

  runRules() {
    console.log('run rules');
  }

  save() {
    console.log('save rule');
  }
}
