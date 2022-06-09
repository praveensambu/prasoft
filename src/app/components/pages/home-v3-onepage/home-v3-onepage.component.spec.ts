import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeV3OnepageComponent } from './home-v3-onepage.component';

describe('HomeV3OnepageComponent', () => {
  let component: HomeV3OnepageComponent;
  let fixture: ComponentFixture<HomeV3OnepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeV3OnepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeV3OnepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
