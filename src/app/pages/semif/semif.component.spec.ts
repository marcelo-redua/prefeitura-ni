import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemifComponent } from './semif.component';

describe('SemifComponent', () => {
  let component: SemifComponent;
  let fixture: ComponentFixture<SemifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
