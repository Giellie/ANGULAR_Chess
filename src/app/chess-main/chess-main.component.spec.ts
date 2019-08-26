import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessMainComponent } from './chess-main.component';

describe('ChessMainComponent', () => {
  let component: ChessMainComponent;
  let fixture: ComponentFixture<ChessMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChessMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
