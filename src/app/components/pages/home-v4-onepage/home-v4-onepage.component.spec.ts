import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeV4OnepageComponent } from './home-v4-onepage.component';

describe('HomeV4OnepageComponent', () => {
  let component: HomeV4OnepageComponent;
  let fixture: ComponentFixture<HomeV4OnepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeV4OnepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeV4OnepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
