import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountsSmartComponentsLibComponent } from './accounts-smart-components-lib.component';

describe('AccountsSmartComponentsLibComponent', () => {
  let component: AccountsSmartComponentsLibComponent;
  let fixture: ComponentFixture<AccountsSmartComponentsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsSmartComponentsLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountsSmartComponentsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
