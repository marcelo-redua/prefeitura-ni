import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemserpComponent } from './semserp.component';

describe('SemserpComponent', () => {
  let component: SemserpComponent;
  let fixture: ComponentFixture<SemserpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemserpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemserpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
