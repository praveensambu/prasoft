import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceNewsletterComponent } from './service-newsletter.component';

describe('ServiceNewsletterComponent', () => {
  let component: ServiceNewsletterComponent;
  let fixture: ComponentFixture<ServiceNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceNewsletterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
