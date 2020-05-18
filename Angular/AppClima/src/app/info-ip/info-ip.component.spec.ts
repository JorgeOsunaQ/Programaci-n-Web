import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoIpComponent } from './info-ip.component';

describe('InfoIpComponent', () => {
  let component: InfoIpComponent;
  let fixture: ComponentFixture<InfoIpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoIpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
