import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesCartComponent } from './movies-cart.component';

describe('MoviesCartComponent', () => {
  let component: MoviesCartComponent;
  let fixture: ComponentFixture<MoviesCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
