import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLocationComponent } from './info-location.component';

describe('InfoLocationComponent', () => {
  let component: InfoLocationComponent;
  let fixture: ComponentFixture<InfoLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
