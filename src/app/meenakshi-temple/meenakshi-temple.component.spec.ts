import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeenakshiTempleComponent } from './meenakshi-temple.component';

describe('MeenakshiTempleComponent', () => {
  let component: MeenakshiTempleComponent;
  let fixture: ComponentFixture<MeenakshiTempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeenakshiTempleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeenakshiTempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
