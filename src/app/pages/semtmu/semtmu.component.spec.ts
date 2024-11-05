import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemtmuComponent } from './semtmu.component';

describe('SemtmuComponent', () => {
  let component: SemtmuComponent;
  let fixture: ComponentFixture<SemtmuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemtmuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemtmuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
