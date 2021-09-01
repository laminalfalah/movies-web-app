import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookmarkMovieComponent } from './list-bookmark-movie.component';

describe('ListBookmarkMovieComponent', () => {
  let component: ListBookmarkMovieComponent;
  let fixture: ComponentFixture<ListBookmarkMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBookmarkMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBookmarkMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
