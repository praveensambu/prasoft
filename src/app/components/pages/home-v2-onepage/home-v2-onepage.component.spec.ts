import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeV2OnepageComponent } from './home-v2-onepage.component';

describe('HomeV2OnepageComponent', () => {
  let component: HomeV2OnepageComponent;
  let fixture: ComponentFixture<HomeV2OnepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeV2OnepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeV2OnepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
