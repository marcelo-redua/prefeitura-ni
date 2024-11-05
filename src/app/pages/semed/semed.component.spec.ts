import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemedComponent } from './semed.component';

describe('SemedComponent', () => {
  let component: SemedComponent;
  let fixture: ComponentFixture<SemedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
