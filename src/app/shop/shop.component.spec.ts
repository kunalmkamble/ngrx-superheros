import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ShopComponent } from './shop.component';
import { MerchandiseComponent } from '../merchandise/merchandise.component';
import { CartComponent } from '../cart/cart.component';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;
  const initialState = { inventory: [], cart: [] };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShopComponent, MerchandiseComponent, CartComponent],
      imports: [FormsModule],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
