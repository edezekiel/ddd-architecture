import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffPortalTransactionsUiLibComponent } from './staff-portal-transactions-ui-lib.component';

describe('StaffPortalTransactionsUiLibComponent', () => {
  let component: StaffPortalTransactionsUiLibComponent;
  let fixture: ComponentFixture<StaffPortalTransactionsUiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffPortalTransactionsUiLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StaffPortalTransactionsUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
