import { ClientAction, ClientI, ClientStateI } from "../interface/Interfaces";

const defaultState: ClientStateI = { clients: [] };

export const clientReducer = (state = defaultState, { type, payload }: ClientAction) => {
    switch (type) {
        case 'addClient':
            return { ...state, clients: [...state.clients, { id: payload }] }

        case 'removeClient': {
            const cleanedClients = state.clients.filter((client: ClientI) => client.id !== payload)
            return { ...state, clients: cleanedClients }
        }
        default:
            return state
    }
}