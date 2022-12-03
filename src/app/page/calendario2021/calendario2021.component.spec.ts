import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calendario2021Component } from './calendario2021.component';

describe('Calendario2021Component', () => {
  let component: Calendario2021Component;
  let fixture: ComponentFixture<Calendario2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calendario2021Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calendario2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
