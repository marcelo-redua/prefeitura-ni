import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemusComponent } from './semus.component';

describe('SemusComponent', () => {
  let component: SemusComponent;
  let fixture: ComponentFixture<SemusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
