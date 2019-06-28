import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap } from "rxjs/operators";
import { Merchandise } from 'src/app/models/Merchandise';
import { ClassActionTypes, Setup } from './inventory.actions';

@Injectable()
export class InventoryEffects {
    @Effect() get$: Observable<Action> =
        this.actions$.pipe(
            ofType(ClassActionTypes.GET),
            mergeMap(() => this.fireStore.collection<Merchandise>('inventory').valueChanges().pipe(
                map(merchandise => new Setup(merchandise))
            ))
        );

    constructor(
        private actions$: Actions,
        private fireStore: AngularFirestore) { }
}



