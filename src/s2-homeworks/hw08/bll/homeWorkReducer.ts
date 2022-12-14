import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[]  => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state.sort((a, b) => a.name < b.name ? -1 : 1)]
            }
            if (action.payload === 'down') {
                return [...state.sort((a, b) => a.name > b.name ? -1 : 1)]
            } else {
                return state
            }
        }
        case 'check': {
            const sortAge = state.sort((a, b) => a.name < b.name ? -1 : 1)
            return sortAge.filter(el => el.age >= 18 ? el : '')
        }
        default:
            return state
    }
}
