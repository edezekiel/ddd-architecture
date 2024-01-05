import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsFeatureNewTransactionLibComponent } from './transactions-feature-new-transaction-lib.component';

describe('TransactionsFeatureNewTransactionLibComponent', () => {
  let component: TransactionsFeatureNewTransactionLibComponent;
  let fixture: ComponentFixture<TransactionsFeatureNewTransactionLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsFeatureNewTransactionLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      TransactionsFeatureNewTransactionLibComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
