import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { rootReducer } from './root.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InventoryComponent } from './inventory/inventory.component';
import { ShopComponent } from './shop/shop.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AddInventoryComponent } from './inventory/add-inventory/add-inventory.component';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    MerchandiseComponent,
    InventoryComponent,
    ShopComponent,
    AddInventoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    rootReducer,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
