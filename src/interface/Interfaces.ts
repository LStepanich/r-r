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
    usersReducer: Users
}

export interface User {
    id: number;
    name: string;
    username: string
}

export interface Users {
    users: User[]
}

export type UsersActionType = 'getUsersFromRemoteServer';

export interface UsersAction {
    type: UsersActionType;
    payload: User[]
}


