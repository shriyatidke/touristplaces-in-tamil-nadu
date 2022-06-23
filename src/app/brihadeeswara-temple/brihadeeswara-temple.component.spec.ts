import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrihadeeswaraTempleComponent } from './brihadeeswara-temple.component';

describe('BrihadeeswaraTempleComponent', () => {
  let component: BrihadeeswaraTempleComponent;
  let fixture: ComponentFixture<BrihadeeswaraTempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrihadeeswaraTempleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrihadeeswaraTempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
