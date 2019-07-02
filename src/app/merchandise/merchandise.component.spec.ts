import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing'
import { MerchandiseComponent } from './merchandise.component';

describe('MerchandiseComponent', () => {
  let component: MerchandiseComponent;
  let fixture: ComponentFixture<MerchandiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MerchandiseComponent],
      providers: [provideMockStore({})]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchandiseComponent);
    component = fixture.componentInstance;
    component.merchandise = {
      displayImage: "",
      available: true, label: "", description: "", price: 99,
      quantity: 10
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
