import { Users, UsersAction } from "../interface/Interfaces";

const defaultState: Users = { users: [] }

export const usersReducer = (state = defaultState, { type, payload }: UsersAction): Users => {
    switch (type) {
        case 'getUsersFromRemoteServer': {
            return { ...state, users: [...state.users, ...payload] };
        }
            default: return state;
    }

}