import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVisuaComponent } from './form-visua.component';

describe('FormVisuaComponent', () => {
  let component: FormVisuaComponent;
  let fixture: ComponentFixture<FormVisuaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVisuaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVisuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
