import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincialComponent } from './princial.component';

describe('PrincialComponent', () => {
  let component: PrincialComponent;
  let fixture: ComponentFixture<PrincialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
