import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateandremovecarComponent } from './updateandremovecar.component';

describe('UpdateandremovecarComponent', () => {
  let component: UpdateandremovecarComponent;
  let fixture: ComponentFixture<UpdateandremovecarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateandremovecarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateandremovecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
