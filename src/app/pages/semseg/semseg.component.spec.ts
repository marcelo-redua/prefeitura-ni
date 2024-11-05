import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemsegComponent } from './semseg.component';

describe('SemsegComponent', () => {
  let component: SemsegComponent;
  let fixture: ComponentFixture<SemsegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemsegComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemsegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
