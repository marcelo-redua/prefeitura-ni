import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryCardComponent } from './secretary-card.component';

describe('SecretaryCardComponent', () => {
  let component: SecretaryCardComponent;
  let fixture: ComponentFixture<SecretaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretaryCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecretaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
