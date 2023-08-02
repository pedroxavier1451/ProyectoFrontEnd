import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactenosComponent } from './contactenos.component';

describe('ContactenosComponent', () => {
  let component: ContactenosComponent;
  let fixture: ComponentFixture<ContactenosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactenosComponent]
    });
    fixture = TestBed.createComponent(ContactenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
