import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegClienteComponent } from './reg-cliente.component';

describe('RegClienteComponent', () => {
  let component: RegClienteComponent;
  let fixture: ComponentFixture<RegClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegClienteComponent]
    });
    fixture = TestBed.createComponent(RegClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
