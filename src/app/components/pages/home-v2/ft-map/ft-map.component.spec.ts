import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtMapComponent } from './ft-map.component';

describe('FtMapComponent', () => {
  let component: FtMapComponent;
  let fixture: ComponentFixture<FtMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
