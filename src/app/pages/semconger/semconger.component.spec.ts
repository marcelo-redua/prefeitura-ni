import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemcongerComponent } from './semconger.component';

describe('SemcongerComponent', () => {
  let component: SemcongerComponent;
  let fixture: ComponentFixture<SemcongerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemcongerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemcongerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
