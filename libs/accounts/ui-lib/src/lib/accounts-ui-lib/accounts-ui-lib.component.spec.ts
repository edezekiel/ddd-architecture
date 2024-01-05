import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountsUiLibComponent } from './accounts-ui-lib.component';

describe('AccountsUiLibComponent', () => {
  let component: AccountsUiLibComponent;
  let fixture: ComponentFixture<AccountsUiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsUiLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountsUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
