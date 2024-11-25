import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports:[CommonModule],
  template: `
    <div class="flex justify-center items-center mt-4">
      <!-- Seta para Página Anterior -->
      <button
        *ngIf="currentPage > 1"
        (click)="onPageChange(currentPage - 1)"
        class="px-3 py-2 border bg-white text-gray border-gray hover:bg-gray rounded-l-md"
      >
        &larr;
      </button>

      <!-- Página 1 -->
      <button
        (click)="onPageChange(1)"
        [ngClass]="{
          'px-3 py-2 border bg-orange text-white border-gray rounded-l-md':
            currentPage === 1,
          'px-3 py-2 border bg-white text-gray border-gray hover:bg-gray rounded-l-md':
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
          'px-3 py-2 border bg-orange text-white border-gray': page === currentPage,
          'px-3 py-2 border bg-white text-gray border-gray hover:bg-gray': page !== currentPage
        }"
        class="border-l-0"
      >
        {{ page }}
      </button>

      <!-- Última Página -->
      <button
        *ngIf="totalPages > 1"
        (click)="onPageChange(totalPages)"
        [ngClass]="{
          'px-3 py-2 border bg-orange text-white border-gray rounded-r-md':
            currentPage === totalPages,
          'px-3 py-2 border bg-white text-gray border-gray hover:bg-gray rounded-r-md':
            currentPage !== totalPages
        }"
      >
        {{ totalPages }}
      </button>

      <!-- Seta para Próxima Página -->
      <button
        *ngIf="currentPage < totalPages"
        (click)="onPageChange(currentPage + 1)"
        class="px-3 py-2 border bg-white text-gray border-gray hover:bg-gray rounded-r-md"
      >
        &rarr;
      </button>
    </div>
  `,
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() totalItems = 0; // Total de itens
  @Input() itemsPerPage = 10; // Itens por página
  @Input() currentPage = 1; // Página atual
  @Output() pageChange = new EventEmitter<number>(); // Evento de mudança de página

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage); // Calcula o total de páginas
  }

  get intermediatePages(): number[] {
    // Gera uma lista de páginas intermediárias (2 até totalPages - 1)
    return Array.from({ length: this.totalPages - 2 }, (_, i) => i + 2);
  }

  onPageChange(page: number): void {
    // Emite o evento de mudança de página
    this.pageChange.emit(page);
  }
}
