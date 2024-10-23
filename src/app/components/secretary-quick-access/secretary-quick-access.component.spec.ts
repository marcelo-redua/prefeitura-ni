import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryQuickAccessComponent } from './secretary-quick-access.component';

describe('SecretaryQuickAccessComponent', () => {
  let component: SecretaryQuickAccessComponent;
  let fixture: ComponentFixture<SecretaryQuickAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretaryQuickAccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecretaryQuickAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
