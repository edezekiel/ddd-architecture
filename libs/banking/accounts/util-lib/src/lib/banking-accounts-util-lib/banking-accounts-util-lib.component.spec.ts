import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BankingAccountsUtilLibComponent } from './banking-accounts-util-lib.component';

describe('BankingAccountsUtilLibComponent', () => {
  let component: BankingAccountsUtilLibComponent;
  let fixture: ComponentFixture<BankingAccountsUtilLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingAccountsUtilLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BankingAccountsUtilLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
