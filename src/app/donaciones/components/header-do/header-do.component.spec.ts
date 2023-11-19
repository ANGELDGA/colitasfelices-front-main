import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDoComponent } from './header-do.component';

describe('HeaderDoComponent', () => {
  let component: HeaderDoComponent;
  let fixture: ComponentFixture<HeaderDoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderDoComponent]
    });
    fixture = TestBed.createComponent(HeaderDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
