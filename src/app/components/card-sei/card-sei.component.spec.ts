import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSeiComponent } from './card-sei.component';

describe('CardSeiComponent', () => {
  let component: CardSeiComponent;
  let fixture: ComponentFixture<CardSeiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSeiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardSeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
