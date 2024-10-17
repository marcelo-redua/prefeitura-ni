import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SematComponent } from './semat.component';

describe('SematComponent', () => {
  let component: SematComponent;
  let fixture: ComponentFixture<SematComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SematComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SematComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
