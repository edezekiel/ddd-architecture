import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsDataLibComponent } from './transactions-data-lib.component';

describe('TransactionsDataLibComponent', () => {
  let component: TransactionsDataLibComponent;
  let fixture: ComponentFixture<TransactionsDataLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsDataLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsDataLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
