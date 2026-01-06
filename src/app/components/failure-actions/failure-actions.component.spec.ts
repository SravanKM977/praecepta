import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureActionsComponent } from './failure-actions.component';

describe('FailureActionsComponent', () => {
  let component: FailureActionsComponent;
  let fixture: ComponentFixture<FailureActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FailureActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FailureActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
