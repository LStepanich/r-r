
import { ValueAction, ValueStateI } from "../interface/Interfaces"

const defaultState: ValueStateI = {
    value: 0,
}

export const valueReducer = (state = defaultState, { type, payload }: ValueAction) => {
    switch (type) {
        case 'add':
            return { ...state, value: state.value + payload }
        case 'substract':
            return { ...state, value: state.value - payload }
        default:
            return state
    }
}

