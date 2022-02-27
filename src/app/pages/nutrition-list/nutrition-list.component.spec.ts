import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionListComponent } from './nutrition-list.component';

describe('NutritionListComponent', () => {
  let component: NutritionListComponent;
  let fixture: ComponentFixture<NutritionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
