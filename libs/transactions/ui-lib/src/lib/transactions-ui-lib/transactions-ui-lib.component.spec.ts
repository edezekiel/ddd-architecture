import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsUiLibComponent } from './transactions-ui-lib.component';

describe('TransactionsUiLibComponent', () => {
  let component: TransactionsUiLibComponent;
  let fixture: ComponentFixture<TransactionsUiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsUiLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
