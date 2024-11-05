import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemdetturComponent } from './semdettur.component';

describe('SemdetturComponent', () => {
  let component: SemdetturComponent;
  let fixture: ComponentFixture<SemdetturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemdetturComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemdetturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
