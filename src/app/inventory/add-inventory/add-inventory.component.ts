import { Component, OnInit, SimpleChanges, Output, Input, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormsModule, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import AppState from 'src/app/store/App.state';
import { inventoryActions } from 'src/app/store/inventory/inventory.actions';
import { MerchandiseEntry } from 'src/app/models/MerchandiseEntry';
import { Merchandise } from 'src/app/models/Merchandise';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.scss']
})
export class AddInventoryComponent {

  @Input() showdialog: boolean;
  @Output() isDialogOpen: any = new EventEmitter();
  heroForm;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.heroForm = this.fb.group({
      displayImage: this.composeValidation(),
      label: this.composeValidation(),
      description: this.composeValidation(),
      quantity: this.composeValidation(),
      price: this.composeValidation(),
      available: new FormControl(true),
    });
  }

  composeValidation = (): FormControl => {
    return new FormControl(
      '',
      Validators.compose([
        Validators.required
      ])
    );
  }

  closeBtn() {
    this.isDialogOpen.emit(false);
  }

  addSuperHero = () => {
    this.store.dispatch(inventoryActions.add(this.heroForm.value));
    this.isDialogOpen.emit(false);
    this.heroForm.reset();
  }

}
