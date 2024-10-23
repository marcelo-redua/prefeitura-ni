import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeiComponent } from './sei.component';

describe('SeiComponent', () => {
  let component: SeiComponent;
  let fixture: ComponentFixture<SeiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
