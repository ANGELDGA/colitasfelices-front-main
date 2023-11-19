import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodydonaComponent } from './bodydona.component';

describe('BodydonaComponent', () => {
  let component: BodydonaComponent;
  let fixture: ComponentFixture<BodydonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodydonaComponent]
    });
    fixture = TestBed.createComponent(BodydonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
