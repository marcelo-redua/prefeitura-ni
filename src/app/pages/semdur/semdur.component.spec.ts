import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemdurComponent } from './semdur.component';

describe('SemdurComponent', () => {
  let component: SemdurComponent;
  let fixture: ComponentFixture<SemdurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemdurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemdurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
