import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex justify-center items-center mt-4">
      <!-- Página 1 -->
      <button
        (click)="onPageChange(1)"
        [ngClass]="{
          'px-4 py-2 border bg-orange text-white rounded-l-md':
            currentPage === 1,
          'px-4 py-2 border bg-white text-gray hover:bg-gray-200 rounded-l-md':
            currentPage !== 1
        }"
      >
        1
      </button>

      <!-- Páginas Intermediárias -->
      <button
        *ngFor="let page of intermediatePages"
        (click)="onPageChange(page)"
        [ngClass]="{
          'px-4 py-2 border bg-orange text-white': page === currentPage,
          'px-4 py-2 border bg-white text-gray hover:bg-gray-200': page !== currentPage
        }"
      >
        {{ page }}
      </button>

      <!-- Última Página -->
      <button
        *ngIf="totalPages > 1"
        (click)="onPageChange(totalPages)"
        [ngClass]="{
          'px-4 py-2 border bg-orange text-white rounded-r-md':
            currentPage === totalPages,
          'px-4 py-2 border bg-white text-gray hover:bg-gray-200 rounded-r-md':
            currentPage !== totalPages
        }"
      >
        Última
      </button>
    </div>
  `,
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() totalItems = 0;
  @Input() itemsPerPage = 10;
  @Input() currentPage = 1;
  @Output() pageChange = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get intermediatePages(): number[] {
    return Array.from({ length: this.totalPages - 2 }, (_, i) => i + 2);
  }

  onPageChange(page: number): void {
    this.pageChange.emit(page);
  }
}
