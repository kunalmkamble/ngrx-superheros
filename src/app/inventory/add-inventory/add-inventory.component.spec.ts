import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from "@ngrx/store/testing";
import { AddInventoryComponent } from './add-inventory.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

describe('AddInventoryComponent', () => {
  let component: AddInventoryComponent;
  let fixture: ComponentFixture<AddInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddInventoryComponent],
      providers: [provideMockStore(), FormBuilder],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
