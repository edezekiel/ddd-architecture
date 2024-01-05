import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountsFeatureViewAccountLibComponent } from './accounts-feature-view-account-lib.component';

describe('AccountsFeatureViewAccountLibComponent', () => {
  let component: AccountsFeatureViewAccountLibComponent;
  let fixture: ComponentFixture<AccountsFeatureViewAccountLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsFeatureViewAccountLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountsFeatureViewAccountLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
