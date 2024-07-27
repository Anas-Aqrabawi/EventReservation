import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUSPageComponent } from './contact-uspage.component';

describe('ContactUSPageComponent', () => {
  let component: ContactUSPageComponent;
  let fixture: ComponentFixture<ContactUSPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactUSPageComponent]
    });
    fixture = TestBed.createComponent(ContactUSPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
