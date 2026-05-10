import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshersParty } from './freshers-party';

describe('FreshersParty', () => {
  let component: FreshersParty;
  let fixture: ComponentFixture<FreshersParty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreshersParty],
    }).compileComponents();

    fixture = TestBed.createComponent(FreshersParty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
