import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BankingAccountsDomainLibComponent } from './banking-accounts-domain-lib.component';

describe('BankingAccountsDomainLibComponent', () => {
  let component: BankingAccountsDomainLibComponent;
  let fixture: ComponentFixture<BankingAccountsDomainLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingAccountsDomainLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BankingAccountsDomainLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
