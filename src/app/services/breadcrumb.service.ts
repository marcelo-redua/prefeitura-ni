// breadcrumb.service.ts
import { Injectable } from '@angular/core';

export interface BreadcrumbItem {
  label: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumbs: BreadcrumbItem[] = [];

  addBreadcrumb(breadcrumb: BreadcrumbItem) {
    this.breadcrumbs.push(breadcrumb);
  }

  getBreadcrumbs() {
    return this.breadcrumbs;
  }

  clearBreadcrumbs() {
    this.breadcrumbs = [];
  }
}