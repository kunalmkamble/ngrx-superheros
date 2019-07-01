import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { map, mergeMap } from "rxjs/operators";
import { Merchandise } from 'src/app/models/Merchandise';
import { Add, ClassActionTypes, Setup } from './inventory.actions';

export enum ActionTypes {
    POST = 'Inventory.post'
}
export class Post implements Action {
    readonly type = ActionTypes.POST;
    constructor(public readonly merchandise: Merchandise) {

    }
}
@Injectable()
export class InventoryEffects {
    @Effect() get$: Observable<Action> =
        this.actions$.pipe(
            ofType(ClassActionTypes.GET),
            mergeMap(() => this.fireStore.collection<Merchandise>('inventory').valueChanges().pipe(
                map(merchandise => new Setup(merchandise))
            ))
        );

    @Effect() post$: Observable<Add> = this.actions$.pipe(ofType(ActionTypes.POST),
        mergeMap((action: Post) => from(this.fireStore.collection<Merchandise>('inventory').add(action.merchandise)).pipe(
            map(() => new Add(action.merchandise))
        )),
    );

    constructor(
        private actions$: Actions,
        private fireStore: AngularFirestore) { }
}



