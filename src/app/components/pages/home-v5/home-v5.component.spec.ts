import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeV5Component } from './home-v5.component';

describe('HomeV5Component', () => {
  let component: HomeV5Component;
  let fixture: ComponentFixture<HomeV5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeV5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeV5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
