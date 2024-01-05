import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BankingAccountsUiLibComponent } from './banking-accounts-ui-lib.component';

describe('BankingAccountsUiLibComponent', () => {
  let component: BankingAccountsUiLibComponent;
  let fixture: ComponentFixture<BankingAccountsUiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingAccountsUiLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BankingAccountsUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
