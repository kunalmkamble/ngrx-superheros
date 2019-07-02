import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing'
import { InventoryComponent } from './inventory.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

describe('InventoryComponent', () => {
  let component: InventoryComponent;
  let fixture: ComponentFixture<InventoryComponent>;
  const initialState = { inventory: [] };
  beforeEach(async(() => {
    class MockFireStore {
      select() {

      }
    }
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [InventoryComponent, AddInventoryComponent],
      providers: [provideMockStore({ initialState }), { provide: AngularFirestore, use: MockFireStore }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
