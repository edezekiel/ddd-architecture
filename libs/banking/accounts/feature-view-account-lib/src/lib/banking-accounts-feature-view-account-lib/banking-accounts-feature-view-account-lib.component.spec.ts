import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BankingAccountsFeatureViewAccountLibComponent } from './banking-accounts-feature-view-account-lib.component';

describe('BankingAccountsFeatureViewAccountLibComponent', () => {
  let component: BankingAccountsFeatureViewAccountLibComponent;
  let fixture: ComponentFixture<BankingAccountsFeatureViewAccountLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingAccountsFeatureViewAccountLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      BankingAccountsFeatureViewAccountLibComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
