import { userService } from '../services/user.service.js'
import { store, SET_USER, UPDATE_USER_BALANCE, ADD_USER_ACTIVITY, ADD_USER_TOY, REMOVE_USER_TOY} from '../store/store.js'

export function login(credentials) {
    return userService.login(credentials)
        .then(user => {
            store.dispatch({ type: SET_USER, user })
            return user
        })
        .catch(err => {
            console.error('Cannot login:', err)
            throw err
        })
}

export function signup(credentials) {
    return userService.signup(credentials)
        .then(user => {
            store.dispatch({ type: SET_USER, user })
            return user
        })
        .catch(err => {
            console.error('Cannot signup:', err)
            throw err
        })
}

export function logout() {
    return userService.logout()
        .then(() => {
            store.dispatch({ type: SET_USER, user: null })
        })
        .catch(err => {
            console.error('Cannot logout:', err)
            throw err
        })
}

export function changeBalance(amount) {
    return userService.updateBalance(amount)
        .then(newBalance => {
            store.dispatch({ type: UPDATE_USER_BALANCE, balance: newBalance })
            return newBalance
        })
        .catch(err => {
            console.error('Cannot checkout:', err)
            throw err
        })
}

export function addUserActivity(activity) {
    return userService.updateActivity(activity)
        .then(newActivity => {
            // console.log('newActivity from user action:',newActivity)
            store.dispatch({ type: ADD_USER_ACTIVITY, activity: newActivity })
        })
}

// export function updateUserToys(toy,action){
//    const type = action==='add' ? ADD_USER_TOY : REMOVE_USER_TOY
//     return userService.updateUserToys(toy,action)
//     .then(()=>{
//         store.dispatch({type , toy})
//     })
// }