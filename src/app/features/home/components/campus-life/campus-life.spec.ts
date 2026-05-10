import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusLife } from './campus-life';

describe('CampusLife', () => {
  let component: CampusLife;
  let fixture: ComponentFixture<CampusLife>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampusLife],
    }).compileComponents();

    fixture = TestBed.createComponent(CampusLife);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
