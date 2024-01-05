import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BankingAccountsDataLibComponent } from './banking-accounts-data-lib.component';

describe('BankingAccountsDataLibComponent', () => {
  let component: BankingAccountsDataLibComponent;
  let fixture: ComponentFixture<BankingAccountsDataLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingAccountsDataLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BankingAccountsDataLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
