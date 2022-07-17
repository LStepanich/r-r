export interface ValueStateI {
    value: number;
}

export type ValueAction = {
    type: ValueActionT,
    payload: number,
}

export type ValueActionT = 'add' | 'substract'

export type ClientActionT = 'addClient' | 'removeClient'

export interface ClientI {
    id: number;
}

export interface ClientStateI {
    clients: ClientI[]
}

export type ClientAction = {
    type: ClientActionT,
    payload: number,
}

export interface CombinedStateI {
    valueReducer: ValueStateI,
    clientReducer: ClientStateI,
}

