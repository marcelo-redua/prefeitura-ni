import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.css'],
})
export class FilterSidebarComponent {
  selectedFilter: string = 'Secretarias';
  searchQuery: string = '';

  setSelectedFilter(filter: string): void {
    this.selectedFilter = filter;
  }
}
