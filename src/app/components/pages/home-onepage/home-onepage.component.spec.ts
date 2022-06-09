import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOnepageComponent } from './home-onepage.component';

describe('HomeOnepageComponent', () => {
  let component: HomeOnepageComponent;
  let fixture: ComponentFixture<HomeOnepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOnepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOnepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
