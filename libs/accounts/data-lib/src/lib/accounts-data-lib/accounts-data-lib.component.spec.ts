import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountsDataLibComponent } from './accounts-data-lib.component';

describe('AccountsDataLibComponent', () => {
  let component: AccountsDataLibComponent;
  let fixture: ComponentFixture<AccountsDataLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsDataLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountsDataLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
