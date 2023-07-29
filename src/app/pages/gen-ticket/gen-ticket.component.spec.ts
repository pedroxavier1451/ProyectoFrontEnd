import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenTicketComponent } from './gen-ticket.component';

describe('GenTicketComponent', () => {
  let component: GenTicketComponent;
  let fixture: ComponentFixture<GenTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenTicketComponent]
    });
    fixture = TestBed.createComponent(GenTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
