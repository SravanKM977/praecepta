import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
  ],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss',
})
export class ActionsComponent {
  actions = [
    'Run/Execute',
    'Checkout',
    'Download JSON',
    'Make a Copy',
    'Rename',
    'Versions',
    'Delete',
  ];

  actionItems = [
    {
      label: 'Run/Execute',
      icon: 'assets/images/run.svg',
    },
    {
      label: 'Checkout',
      icon: 'assets/images/checkout.svg',
    },
    {
      label: 'Download JSON',
      icon: 'assets/images/download.svg',
    },
    {
      label: 'Make a Copy',
      icon: 'assets/images/copy.svg',
    },
    {
      label: 'Rename',
      icon: 'assets/images/rename.png',
    },
    {
      label: 'Versions',
      icon: 'assets/images/versions.png',
    },
    {
      label: 'Delete',
      icon: 'assets/images/delete.png',
    },
  ];
}
