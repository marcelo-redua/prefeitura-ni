import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemugComponent } from './semug.component';

describe('SemugComponent', () => {
  let component: SemugComponent;
  let fixture: ComponentFixture<SemugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemugComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
