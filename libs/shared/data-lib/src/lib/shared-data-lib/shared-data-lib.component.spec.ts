import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedDataLibComponent } from './shared-data-lib.component';

describe('SharedDataLibComponent', () => {
  let component: SharedDataLibComponent;
  let fixture: ComponentFixture<SharedDataLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedDataLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedDataLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
