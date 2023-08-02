import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagessoporteComponent } from './pagessoporte.component';

describe('PagessoporteComponent', () => {
  let component: PagessoporteComponent;
  let fixture: ComponentFixture<PagessoporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagessoporteComponent]
    });
    fixture = TestBed.createComponent(PagessoporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
