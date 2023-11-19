import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptaComponent } from './adopta.component';

describe('AdoptaComponent', () => {
  let component: AdoptaComponent;
  let fixture: ComponentFixture<AdoptaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdoptaComponent]
    });
    fixture = TestBed.createComponent(AdoptaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
