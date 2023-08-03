import { DECREASE_NUMBER, INCREASE_NUMBER } from './actionType'
const initialState = {
    number: 100,
    age: 20
}
export const demoReduxReducer = (state = initialState, action) => {
    console.log('action: ', action)
    switch (action.type) {
        case INCREASE_NUMBER: {
            state.number += action.payload
            return { ...state }
        }
        case DECREASE_NUMBER: {
            state.number += action.payload
            return { ...state }
        }
        default:
            return state
    }
}