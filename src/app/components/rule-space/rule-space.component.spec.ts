import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleSpaceComponent } from './rule-space.component';

describe('RuleSpaceComponent', () => {
  let component: RuleSpaceComponent;
  let fixture: ComponentFixture<RuleSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuleSpaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuleSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
