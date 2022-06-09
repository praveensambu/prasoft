import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeV5OnepageComponent } from './home-v5-onepage.component';

describe('HomeV5OnepageComponent', () => {
  let component: HomeV5OnepageComponent;
  let fixture: ComponentFixture<HomeV5OnepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeV5OnepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeV5OnepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
