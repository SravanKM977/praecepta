import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewRuleComponent } from './add-new-rule.component';

describe('AddNewRuleComponent', () => {
  let component: AddNewRuleComponent;
  let fixture: ComponentFixture<AddNewRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewRuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
