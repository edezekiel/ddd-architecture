import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountsFeatureOpenAccountLibComponent } from './accounts-feature-open-account-lib.component';

describe('AccountsFeatureOpenAccountLibComponent', () => {
  let component: AccountsFeatureOpenAccountLibComponent;
  let fixture: ComponentFixture<AccountsFeatureOpenAccountLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsFeatureOpenAccountLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountsFeatureOpenAccountLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
