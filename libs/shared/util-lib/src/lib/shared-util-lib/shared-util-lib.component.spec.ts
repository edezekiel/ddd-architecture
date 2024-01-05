import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedUtilLibComponent } from './shared-util-lib.component';

describe('SharedUtilLibComponent', () => {
  let component: SharedUtilLibComponent;
  let fixture: ComponentFixture<SharedUtilLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUtilLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUtilLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
