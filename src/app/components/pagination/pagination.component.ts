import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [MatPaginatorModule, MatIconModule, CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnInit {
  // Define total items and page size to calculate total pages
  @Input() items: number = 0;
  @Output() pageChange = new EventEmitter<number>();
  pageSize: number = 10;
  totalPages: number = 0;

  // The state variables
  currentPage: number = 1;
  pageNumbers: number[] = [];

  ngOnInit() {
    this.calculatePageNumbers();
  }

  calculatePageNumbers() {
    // Calculate total pages needed
    this.totalPages = Math.ceil(this.items / this.pageSize);

    const maxVisiblePages = this.totalPages;
    this.pageNumbers = Array(Math.min(this.totalPages, maxVisiblePages))
      .fill(0)
      .map((x, i) => i + 1);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      console.log('Navigating to page:', this.currentPage);
      // Logic here to fetch data for the new page
      this.pageChange.emit(this.currentPage);
    }
  }

  // Helper functions for Previous/Next buttons
  previousPage() {
    this.goToPage(this.currentPage - 1);
  }

  nextPage() {
    this.goToPage(this.currentPage + 1);
  }
}
