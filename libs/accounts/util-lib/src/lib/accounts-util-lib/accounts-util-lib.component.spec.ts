import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountsUtilLibComponent } from './accounts-util-lib.component';

describe('AccountsUtilLibComponent', () => {
  let component: AccountsUtilLibComponent;
  let fixture: ComponentFixture<AccountsUtilLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsUtilLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountsUtilLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
