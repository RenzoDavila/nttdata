import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrategiasOptimizacionComponent } from './estrategias-optimizacion.component';

describe('EstrategiasOptimizacionComponent', () => {
  let component: EstrategiasOptimizacionComponent;
  let fixture: ComponentFixture<EstrategiasOptimizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstrategiasOptimizacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstrategiasOptimizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
