import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDealerFormComponent } from './contact-dealer-form.component';

describe('ContactDealerFormComponent', () => {
  let component: ContactDealerFormComponent;
  let fixture: ComponentFixture<ContactDealerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDealerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDealerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
