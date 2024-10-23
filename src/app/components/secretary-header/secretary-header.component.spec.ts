import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryHeaderComponent } from './secretary-header.component';

describe('SecretaryHeaderComponent', () => {
  let component: SecretaryHeaderComponent;
  let fixture: ComponentFixture<SecretaryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretaryHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecretaryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
