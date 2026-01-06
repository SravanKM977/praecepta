import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dots-actions',
  standalone: true,
  imports: [MatMenuModule, MatIconModule, CommonModule],
  templateUrl: './dots-actions.component.html',
  styleUrl: './dots-actions.component.scss',
})
export class DotsActionsComponent {
  actionItems = [
    {
      label: 'Make a Copy',
      icon: 'assets/images/copy.svg',
    },
    {
      label: 'Rename',
      icon: 'assets/images/rename.png',
    },
    {
      label: 'Delete',
      icon: 'assets/images/delete.png',
    },
  ];
}
