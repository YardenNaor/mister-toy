


import { userService } from "../services/user.service.js"
import {toyService} from "../services/toy.service.js"
export const SET_TOYS = 'SET_TOYS'
export const REMOVE_TOY = 'REMOVE_TOY'
export const ADD_TOY = 'ADD_TOY'
export const UPDATE_TOY = 'UPDATE_TOY'
export const SET_TOY = 'SET_TOY'

export const SET_USER = 'SET_USER'
export const ADD_USER_ACTIVITY = 'ADD_USER_ACTIVITY'
export const UPDATE_USER_BALANCE = 'CHANGE_USER_BALANCE'

export const SET_FILTER = 'SET_FILTER'

const { createStore } = Redux

const initialState = {
    user: userService.getLoggedinUser(),
    filterBy: toyService.getDefaultFilter(),
    toys: [],
    currToy: null
}

function appReducer(state = initialState, action) {
    let toys
    let user
    console.log('action.type:', action.type)
    switch (action.type) {
        case SET_TOYS:
            return { ...state, toys: action.toys }
        case REMOVE_TOY:
            // console.log('action.to:',action.to)
            toys = state.toys.filter(t => t._id !== action.toyId)
            return { ...state, toys }
        case ADD_TOY:
            console.log('action:', action)
            toys = [...state.toys, action.toy]
            return { ...state, toys }
        case UPDATE_TOY:
            toys = state.toys.map(toy => toy._id === action.toy._id ? action.toy : toy)
            return { ...state, toys }
        case SET_TOY:
            return { ...state, currToy: action.toy }


        case SET_USER:
            return { ...state, user: action.user }
        case ADD_USER_ACTIVITY:
            // console.log('action.activity:', action.activity)
            const currActivities = [...state.user.activities, action.activity]
            user = { ...state.user, activities: currActivities }
            return { ...state, user }
        case UPDATE_USER_BALANCE:
            user = { ...state.user, balance: action.balance }
            return { ...state, user }

             // Filter
    case SET_FILTER:
        return { ...state, filterBy: action.filterBy }

        default:
            return { ...state }
    }
}



export const store = createStore(appReducer)

store.subscribe(() => {
    console.log('Current state is:', store.getState())
})