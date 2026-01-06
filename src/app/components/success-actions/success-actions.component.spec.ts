import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessActionsComponent } from './success-actions.component';

describe('SuccessActionsComponent', () => {
  let component: SuccessActionsComponent;
  let fixture: ComponentFixture<SuccessActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
