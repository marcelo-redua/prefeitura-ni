import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemcultComponent } from './semcult.component';

describe('SemcultComponent', () => {
  let component: SemcultComponent;
  let fixture: ComponentFixture<SemcultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemcultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemcultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
