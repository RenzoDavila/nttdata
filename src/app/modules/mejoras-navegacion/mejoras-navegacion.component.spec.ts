import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MejorasNavegacionComponent } from './mejoras-navegacion.component';

describe('MejorasNavegacionComponent', () => {
  let component: MejorasNavegacionComponent;
  let fixture: ComponentFixture<MejorasNavegacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MejorasNavegacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MejorasNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
