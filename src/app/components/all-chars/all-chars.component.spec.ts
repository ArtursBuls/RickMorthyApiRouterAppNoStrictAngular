import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCharsComponent } from './all-chars.component';

describe('AllCharsComponent', () => {
  let component: AllCharsComponent;
  let fixture: ComponentFixture<AllCharsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCharsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCharsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
