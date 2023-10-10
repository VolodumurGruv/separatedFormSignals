import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparatedFormComponent } from './sparated-form.component';

describe('SparatedFormComponent', () => {
  let component: SparatedFormComponent;
  let fixture: ComponentFixture<SparatedFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SparatedFormComponent]
    });
    fixture = TestBed.createComponent(SparatedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
