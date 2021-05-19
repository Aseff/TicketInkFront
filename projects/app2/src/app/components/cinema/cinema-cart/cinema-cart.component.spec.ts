import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaCartComponent } from './cinema-cart.component';

describe('CinemaCartComponent', () => {
  let component: CinemaCartComponent;
  let fixture: ComponentFixture<CinemaCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
