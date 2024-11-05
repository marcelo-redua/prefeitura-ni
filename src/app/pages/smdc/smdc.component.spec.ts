import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmdcComponent } from './smdc.component';

describe('SmdcComponent', () => {
  let component: SmdcComponent;
  let fixture: ComponentFixture<SmdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmdcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
