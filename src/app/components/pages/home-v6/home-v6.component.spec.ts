import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeV6Component } from './home-v6.component';

describe('HomeV6Component', () => {
  let component: HomeV6Component;
  let fixture: ComponentFixture<HomeV6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeV6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeV6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
