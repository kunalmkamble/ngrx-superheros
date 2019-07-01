import { Action } from '@ngrx/store';
import { Merchandise } from 'src/app/models/Merchandise';


/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ClassActionTypes {
    ADD = '[Inventory] Add',
    REMOVE = '[Inventory] Remove',
    GET = '[Inventory] get',
    SETUP = '[Inventory] Setup'
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */
export class Add implements Action {
    readonly type = ClassActionTypes.ADD;

    constructor(public payload: Merchandise) { }
}

export class Remove implements Action {
    readonly type = ClassActionTypes.REMOVE;

    constructor(public index: number) { }
}

export class Get implements Action {
    readonly type = ClassActionTypes.GET;
}



export class Setup implements Action {
    readonly type = ClassActionTypes.SETUP;
    constructor(public payload: Merchandise[]) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type ClassActions
    = Add
    | Remove | Setup | Get;


