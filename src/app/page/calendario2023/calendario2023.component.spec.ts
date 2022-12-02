import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calendario2023Component } from './calendario2023.component';

describe('Calendario2023Component', () => {
  let component: Calendario2023Component;
  let fixture: ComponentFixture<Calendario2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calendario2023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calendario2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
