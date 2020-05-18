import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRandomComponent } from './table-random.component';

describe('TableRandomComponent', () => {
  let component: TableRandomComponent;
  let fixture: ComponentFixture<TableRandomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRandomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
