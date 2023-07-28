import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClienteComponent } from './list-cliente.component';

describe('ListClienteComponent', () => {
  let component: ListClienteComponent;
  let fixture: ComponentFixture<ListClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListClienteComponent]
    });
    fixture = TestBed.createComponent(ListClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
