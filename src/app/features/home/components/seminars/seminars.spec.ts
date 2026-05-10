import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seminars } from './seminars';

describe('Seminars', () => {
  let component: Seminars;
  let fixture: ComponentFixture<Seminars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seminars],
    }).compileComponents();

    fixture = TestBed.createComponent(Seminars);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
