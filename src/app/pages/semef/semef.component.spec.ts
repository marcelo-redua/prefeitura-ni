import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemefComponent } from './semef.component';

describe('SemefComponent', () => {
  let component: SemefComponent;
  let fixture: ComponentFixture<SemefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
