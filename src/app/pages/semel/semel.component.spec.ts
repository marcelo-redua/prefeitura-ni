import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemelComponent } from './semel.component';

describe('SemelComponent', () => {
  let component: SemelComponent;
  let fixture: ComponentFixture<SemelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
