import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calendario2022Component } from './calendario2022.component';

describe('Calendario2022Component', () => {
  let component: Calendario2022Component;
  let fixture: ComponentFixture<Calendario2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calendario2022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calendario2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
