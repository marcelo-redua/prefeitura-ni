import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemasComponent } from './semas.component';

describe('SemasComponent', () => {
  let component: SemasComponent;
  let fixture: ComponentFixture<SemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
