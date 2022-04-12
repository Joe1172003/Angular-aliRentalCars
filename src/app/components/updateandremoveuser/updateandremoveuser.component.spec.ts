import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateandremoveuserComponent } from './updateandremoveuser.component';

describe('UpdateandremoveuserComponent', () => {
  let component: UpdateandremoveuserComponent;
  let fixture: ComponentFixture<UpdateandremoveuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateandremoveuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateandremoveuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
