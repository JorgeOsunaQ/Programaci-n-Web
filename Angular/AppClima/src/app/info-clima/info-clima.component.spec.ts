import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoClimaComponent } from './info-clima.component';

describe('InfoClimaComponent', () => {
  let component: InfoClimaComponent;
  let fixture: ComponentFixture<InfoClimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoClimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
