import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemamComponent } from './semam.component';

describe('SemamComponent', () => {
  let component: SemamComponent;
  let fixture: ComponentFixture<SemamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
