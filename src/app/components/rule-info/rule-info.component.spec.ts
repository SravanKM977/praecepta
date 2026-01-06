import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleInfoComponent } from './rule-info.component';

describe('RuleInfoComponent', () => {
  let component: RuleInfoComponent;
  let fixture: ComponentFixture<RuleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuleInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
