import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuvidoriaComponent } from './ouvidoria.component';

describe('OuvidoriaComponent', () => {
  let component: OuvidoriaComponent;
  let fixture: ComponentFixture<OuvidoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OuvidoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OuvidoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
