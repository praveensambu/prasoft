import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeV6OnepageComponent } from './home-v6-onepage.component';

describe('HomeV6OnepageComponent', () => {
  let component: HomeV6OnepageComponent;
  let fixture: ComponentFixture<HomeV6OnepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeV6OnepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeV6OnepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
