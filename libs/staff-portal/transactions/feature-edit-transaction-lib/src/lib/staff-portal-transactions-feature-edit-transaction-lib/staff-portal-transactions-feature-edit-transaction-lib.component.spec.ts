import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffPortalTransactionsFeatureEditTransactionLibComponent } from './staff-portal-transactions-feature-edit-transaction-lib.component';

describe('StaffPortalTransactionsFeatureEditTransactionLibComponent', () => {
  let component: StaffPortalTransactionsFeatureEditTransactionLibComponent;
  let fixture: ComponentFixture<StaffPortalTransactionsFeatureEditTransactionLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffPortalTransactionsFeatureEditTransactionLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      StaffPortalTransactionsFeatureEditTransactionLibComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
