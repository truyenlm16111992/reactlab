import { INCREASE_NUMBER, DECREASE_NUMBER } from './actionType'

export const demoReduxActions = {
    increaseNumber: (payload) => {
        return {
            type: INCREASE_NUMBER,
            payload,
        }
    },
    decreaseNumber: (payload) => {
        return {
            type: DECREASE_NUMBER,
            payload,
        }
    },
}
